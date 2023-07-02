import {
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { MyModal } from "src/components/modal";
import React, { useState } from "react";
import { TabPanel } from "src/components/tab-panel";
import { setTabIndex } from "src/utils/set-tab-index";

export const ProductModal = (props) => {
  const { open, title, onClose } = props;
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const content = (
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleTabChange} centered>
          <Tab label="Thêm Bằng Link" {...setTabIndex(0)} />
          <Tab label="Thêm Bằng Tay" {...setTabIndex(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Nhập link Shopee, Lazada, Tiki,... của sản phẩm"
              variant="standard"
              size="small"
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              size="small"
              fullWidth
              label="Tên mặc định (bạn có thể sửa lại, việc sửa lại ở đây sẽ không thay đổi tên trên Shopee, Lazada, Tiki,...)"
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
          <Grid item md={6}>
            <FormControlLabel control={<Switch color="success" />} label="Sản phẩm chiến lược" />
          </Grid>
          <Grid item md={6}>
            <img
              height="80"
              src="https://login.medlatec.vn//ImagePath/images/20200421/20200421_can-sa-1.jpg"
            ></img>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField fullWidth label="Nhập tên sản phẩm" variant="standard" size="small" />
          </Grid>
          <Grid item md={12}>
            <FormControlLabel control={<Switch color="success" />} label="Sản phẩm chiến lược" />
          </Grid>
        </Grid>
      </TabPanel>
    </React.Fragment>
  );

  return <MyModal title={title} content={content} onClose={onClose} open={open}></MyModal>;
};

ProductModal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
};
