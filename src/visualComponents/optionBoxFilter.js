import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function OptionBoxFilter({label, onChange, filterField, value, children}) {
    function handleOnChange(e) {
        if (!filterField.includes(".")) {
            onChange({[filterField]: passedValue});
            return;
        }
        const filterObject = {};
        let innerObject = filterObject;
        const splitPath = filterField.split(".");
        for (let i = 0; i < splitPath.length; i++) {
            if (i === splitPath.length - 1) {
                innerObject[splitPath[i]] = e.target.value;
            } else {
                innerObject[splitPath[i]] = {};
                innerObject = innerObject[[splitPath[i]]];
            }
        }
        onChange(filterObject);
    }

    const passedValue = value || "";

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                variant={"filled"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={passedValue}
                label="Age"
                onChange={handleOnChange}
            >
                {children}
            </Select>
        </FormControl>
    );
}

export default OptionBoxFilter;