import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function OptionBoxFilter({label, onChange, filterField, value, children}) {
    function handleOnChange(e) {
        onChange({[filterField]: e.target.value});
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