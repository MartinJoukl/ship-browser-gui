import {TextField} from "@mui/material";

function StringFilter({label, onChange, filterField, value}) {

    function handleOnChange(e) {
        let passedValue;
        if (e.target.value) {
            passedValue = e.target.value + "%";
        } else {
            passedValue = e.target.value;
        }
        if (!filterField.includes(".")) {
            onChange({[filterField]: passedValue});
            return;
        }
        const filterObject = {};
        let innerObject = filterObject;
        const splitPath = filterField.split(".");
        for (let i = 0; i < splitPath.length; i++) {
            if (i === splitPath.length - 1) {
                innerObject[splitPath[i]] = passedValue
            } else {
                innerObject[splitPath[i]] = {};
                innerObject = innerObject[[splitPath[i]]];
            }
        }
        onChange(filterObject);
    }

    return (
        <TextField variant={"filled"} label={label} onChange={handleOnChange} value={value} fullWidth={true}/>
    );
}

export default StringFilter;