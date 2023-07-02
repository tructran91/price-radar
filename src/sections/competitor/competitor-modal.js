import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { MyModal } from "src/components/modal";
import React from "react";

export const CompetitorModal = (props) => {
  const { open, title, onClose } = props;

  const content = (
    <React.Fragment>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Nhập link Shopee, Lazada, Tiki,... của đối thủ"
              variant="standard"
              size="small"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              size="small"
              fullWidth
              label="Tên đối thủ mặc định (bạn có thể sửa lại, việc sửa lại ở đây sẽ không thay đổi tên trên Shopee, Lazada, Tiki,...)"
              variant="standard"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              size="small"
              fullWidth
              label="Giá bán (bạn có thể sửa để hiển thị)"
              value="69.000"
              variant="standard"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              size="small"
              fullWidth
              label="Giá bán"
              disabled
              value="69.000"
              variant="standard"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              size="small"
              fullWidth
              label="Số lượng bán"
              disabled
              value="12"
              variant="standard"
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              size="small"
              fullWidth
              label="Số lượng đánh giá"
              disabled
              value="5"
              variant="standard"
            />
          </Grid>
          <Grid item md={12}>
            <img
              height="80"
              src="https://login.medlatec.vn//ImagePath/images/20200421/20200421_can-sa-1.jpg"
            ></img>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );

  return <MyModal title={title} content={content} onClose={onClose} open={open}></MyModal>;
};

CompetitorModal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
};
