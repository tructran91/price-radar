import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import DocumentArrowDownIcon from "@heroicons/react/24/solid/DocumentArrowDownIcon";
import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  Modal,
  SvgIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 850,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

export const MyModal = (props) => {
  const { open, title, content, onClose } = props;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Card sx={style}>
          <CardHeader title={title} sx={{ p: 0 }} />
          <CardContent sx={{ p: 0, my: 3 }}>{content}</CardContent>
          <CardActions sx={{ justifyContent: "flex-end", p: 0 }}>
            <Button
              size="small"
              color="success"
              variant="outlined"
              startIcon={
                <SvgIcon fontSize="small">
                  <DocumentArrowDownIcon />
                </SvgIcon>
              }
            >
              Lưu
            </Button>
            <Button
              size="small"
              color="error"
              variant="outlined"
              startIcon={
                <SvgIcon fontSize="small">
                  <XMarkIcon />
                </SvgIcon>
              }
              onClick={onClose}
            >
              Hủy
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </Modal>
  );
};

MyModal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.object,
  onClose: PropTypes.func,
};
