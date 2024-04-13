import {Card, Modal} from "@mui/material";

export default function ModalPopUp({open, modalOpenFunction, Body, title}) {
    const handleClose = () => modalOpenFunction(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80vw",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby={title}
            onClick={() => {
                handleClose(true)
            }
            }
        >
            <Card sx={style}>
                {Body}
            </Card>
        </Modal>
    );
}