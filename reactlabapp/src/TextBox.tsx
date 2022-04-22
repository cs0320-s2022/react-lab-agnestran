import "./App.css";

function TextBox(props: any) {

    const myHandler = (event : any) => {props.change(event.target.value)}

    return (
        <div className="TextBox">


            Enter {props.label}:{" "}

            {/*Then, in TextBox.tsx, you'll be able to access this label with {props.label}, */}
            {/*and you can take in input with an <input type={'text'}> element.*/}
            <input
                type={"text"}
                onChange={myHandler}
            />
        </div>
    );
}

export default TextBox;