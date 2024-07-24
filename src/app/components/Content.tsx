import next from "next";

function Content() {
    return (
        <div className="flex">
            <div className=" block text-blue-500 p-[10px] mb-[10px] ">
                <a className=" block p-[10px] mb-[10px]" href="/">Home</a>
                <a className=" block p-[10px] mb-[10px]" href="#skills">Skills</a>
                <a className=" block p-[10px] mb-[10px]" href="#experience">Experience</a>
                <a className=" block p-[10px] mb-[10px]" href="#projects">Projects</a>
                <a className=" block p-[10px] mb-[10px]" href="#volunteering">Volunteering</a>
                <a className=" block p-[10px] mb-[10px]" href="#hobbies">Hobbies</a>
                <a className=" block p-[10px] mb-[10px]" href="#Contact">Contact</a>
            </div>
        </div>
    );
}
// .sidebar a {
//     display: block;
//     color: #fff;
//     text-decoration: none;
//     padding: 10px;
//     margin-bottom: 10px;
//     transition: background-color 0.3s;
// }

export default Content;


// .container {
//     display: flex;
// }
// width: 200px;
//             height: 100vh;
//             background-color: #136a13;
//             color: #fff;
//             box-sizing: border-box;
//             position: fixed;

// .content {
//     flex: 1;
//     padding: 20px;
//     box-sizing: border-box;
//     margin-left: 200px;
//       text-align: justify;
// }



// /* Change background color on hover */
// .sidebar a:hover {
//     background-color: #2980b9;
// }