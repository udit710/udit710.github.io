/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';

// Constants
const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
const STREAM_MUTATION_ODDS = 0.02;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const MIN_INTERVAL_DELAY = 50;
const MAX_INTERVAL_DELAY = 100;

const MIN_DELAY_BETWEEN_STREAMS = 0;
const MAX_DELAY_BETWEEN_STREAMS = 8000;

const getRandInRange = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min)) + min;

const getRandChar = (): string =>
	VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = (): string[] =>
	new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
		.fill('')
		.map(_ => getRandChar());

const getMutatedStream = (stream: string[]): string[] => {
	const newStream: string[] = [];
	for (let i = 1; i < stream.length; i++) {
		if (Math.random() < STREAM_MUTATION_ODDS) {
			newStream.push(getRandChar());
		} else {
			newStream.push(stream[i]);
		}
	}
	newStream.push(getRandChar());
	return newStream;
};

interface RainStreamProps {
	height: number | null;
}

const RainStream: React.FC<RainStreamProps> = (props) => {
	const [stream, setStream] = useState<string[]>(getRandStream());
	const [topPadding, setTopPadding] = useState<number>(stream.length * -50);
	const [intervalDelay, setIntervalDelay] = useState<number | null>(null);

	// Initialize intervalDelay
	useEffect(() => {
		const timeout = setTimeout(() => {
			setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
		}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
        if (props.height === null || intervalDelay === null) return;

		const interval = setInterval(() => {
			if (topPadding > props.height) {
				setStream([]);
				const newStream = getRandStream();
				setStream(newStream);
				setTopPadding(newStream.length * -44);
				setIntervalDelay(null);
				const timeout = setTimeout(() => {
					setIntervalDelay(getRandInRange(MIN_INTERVAL_DELAY, MAX_INTERVAL_DELAY));
				}, getRandInRange(MIN_DELAY_BETWEEN_STREAMS, MAX_DELAY_BETWEEN_STREAMS));
				return () => clearTimeout(timeout);
			} else {
				setTopPadding(topPadding + 44);
			}
			setStream(prevStream => getMutatedStream(prevStream));
		}, intervalDelay);

		return () => clearInterval(interval);
	}, [props.height, intervalDelay, topPadding]);

	return (
		<div
			style={{
				fontFamily: 'matrixFont',
				color: '#20c20e',
				writingMode: 'vertical-rl',
				textOrientation: 'upright',
				userSelect: 'none',
				whiteSpace: 'nowrap',
				marginTop: topPadding,
				marginLeft: -30,
				marginRight: -30,
				textShadow: '0px 0px 8px rgba(32, 194, 14, 0.8)',
				fontSize: 20,
			}}>
			{stream.map((char, index) => (
				<a
					key={index}
					style={{
						marginTop: -12,
						// Reduce opacity for last chars
						opacity: index < 6 ? 0.1 + index * 0.15 : 1,
						color: index === stream.length - 1 ? '#fff' : undefined,
						textShadow:
							index === stream.length - 1
								? '0px 0px 20px rgba(255, 255, 255, 1)'
								: undefined,
					}}>
					{char}
				</a>
			))}
		</div>
	);
};

const MatrixRain: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [containerSize, setContainerSize] = useState<{ width: number, height: number } | null>(null);

	useEffect(() => {
		if (containerRef.current) {
			const boundingClientRect = containerRef.current.getBoundingClientRect();
			setContainerSize({
				width: boundingClientRect.width,
				height: boundingClientRect.height,
			});
		}
	}, []);

	const streamCount = containerSize ? Math.floor(containerSize.width / 26) : 0;

	return (
		<div
			style={{
				background: 'black',
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
                zIndex: -1,
			}}
			ref={containerRef}>
			{new Array(streamCount).fill(null).map((_, index) => (
				<RainStream key={index} height={containerSize?.height ?? null} />
			))}
		</div>
	);
};

export default MatrixRain;
