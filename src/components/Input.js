import React, {useState} from 'react'

const Input = (props) => {
    
    //-----------------------------------
    // I) PROP, STATE AND AUX VARIABLES
    // ----------------------------------

    const {taskList, setTaskList} = props
    const [taskName, setTaskName] = useState("")

    //-----------------------------------
    // II) HANDLERS
    //-----------------------------------

    const inputHandler = (e) => {
        
        setTaskName(e.target.value);
    }

    const formHandler = (e) => {
        // Prevent to refresh the page when submitting
        e.preventDefault();
        let newTask = {
            name: taskName,
            isComplete: false
        }
        setTaskList([...taskList,newTask]);
        setTaskName("");
    }

    //-----------------------------------
    // III) JSX
    //-----------------------------------

    return (
        <div className="my-3">
         
            <form onSubmit = { formHandler }>
            
                <div className="form-group">
                    <input type="text" className="form-control" onChange={ inputHandler } name="task" value={taskName}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            
        </div>
    )
}

export default Input
