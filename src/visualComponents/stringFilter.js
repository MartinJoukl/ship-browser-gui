import {forwardRef} from "react";
import {TextField} from "@mui/material";

function StringFilter({label, onChange, filterField, value}) {

    function handleOnChange(e) {
        let passedValue;
        if (e.target.value) {
            passedValue = e.target.value + "%";
        } else {
            passedValue = e.target.value;
        }
        onChange({[filterField]: passedValue});
    }

    return (
        <TextField variant={"filled"} label={label} onChange={handleOnChange} value={value} fullWidth={true}/>
    );
}

export default StringFilter;