import Studentdetails from "./student";
export function Trainerresp()
{
    const sname="Karunya";
    const sage="20";
    return(<> <Studentdetails name={sname} age={sage}></Studentdetails></>);
}