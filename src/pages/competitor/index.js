import { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompetitorTable } from "src/sections/competitor/competitor-table";
import { applyPagination } from "src/utils/apply-pagination";
import { APP_NAME } from "src/utils/constant";
import { OverviewProductsTable } from "src/sections/competitor/overview-products-table";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { ProductSelectedInfo } from "src/sections/competitor/product-selected-info";
import { ProductModal } from "src/sections/competitor/product-modal";
import { CompetitorModal } from "src/sections/competitor/competitor-modal";

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    name: "Gieo Nghiệp Club",
    image: "https://down-vn.img.susercontent.com/file/cca5ca71f8a2cd7a057110eb608e06e8",
    price: "12.000",
    commentCount: 123,
    historicalSold: 69,
    link: "Link shopee",
    isOwner: false,
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    name: "Đầu Khấc Shop",
    image: "https://down-vn.img.susercontent.com/file/d4a6f75b06c1b1171a02dd4f1d8c8a01",
    price: "1.000.000 - 1.500.000",
    commentCount: 64562,
    historicalSold: 386,
    link: "Link tiki",
    isOwner: true,
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    name: "Sống Chết Có Nhau Shop",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/49/82/5c/136c2958ecb797bf9c6164d0b0f93314.jpg",
    price: "300.000 - 500.000",
    commentCount: 444,
    historicalSold: 64,
    link: "Link lazada",
    isOwner: false,
  },
  {
    id: "5e86809283e28b96d2d38537",
    name: "Cú Con Cưng Shop",
    image:
      "https://salt.tikicdn.com/cache/750x750/ts/product/18/e5/ec/ac1933efd2ffb84f2eb4b935dc5064c4.jpg",
    price: "669.000",
    commentCount: 2346,
    historicalSold: 55,
    link: "Link shopee",
    isOwner: false,
  },
];

const productData = [
  {
    id: "5e887ac47eed253091be10cb",
    name: "ma túy tổng hợp",
    image: "https://down-vn.img.susercontent.com/file/2dfbb4ce5954b0a818b121621063957e",
    code: "123456",
    type: "sp chiến lược",
    isHeroType: false,
    price: "669.000",
    commentCount: 2346,
    historicalSold: 55,
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    name: "cần sa thượng hạng",
    image: "https://login.medlatec.vn//ImagePath/images/20200421/20200421_can-sa-1.jpg",
    code: "56774",
    type: "sp chiến lược",
    isHeroType: true,
    price: "12.000",
    commentCount: 24,
    historicalSold: 83,
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    name: "xì gà cuba",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Four_cigars.jpg/1280px-Four_cigars.jpg",
    code: "0984456",
    type: "sp thường",
    isHeroType: false,
    price: "669.000",
    commentCount: 2346,
    historicalSold: 55,
  },
  {
    id: "5e86809283e28b96d2d38537",
    name: "thuốc phiện xứ mường",
    image: "https://www.thuocdantoc.org/wp-content/uploads/2019/05/anh-tuc-xac.jpg",
    code: "2545362",
    type: "sp chiến lược",
    isHeroType: true,
    price: "1.000.000 - 1.500.000",
    commentCount: 2346,
    historicalSold: 55,
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    name: "hoa anh túc sấy khô",
    image: "https://thegioisofa.com/wp-content/uploads/2022/06/Dac-diem-hoa-anh-tuc.jpg",
    code: "876555",
    type: "sp thường",
    isHeroType: false,
    price: "12.000",
    commentCount: 2346,
    historicalSold: 55,
  },
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const useProducts = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(productData, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useProductIds = (products) => {
  return useMemo(() => {
    return products.map((product) => product.id);
  }, [products]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const [product, setProduct] = useState();
  const products = useProducts(page, rowsPerPage);
  const productIds = useProductIds(products);
  const productsSelection = useSelection(productIds);

  const [openProductModal, setOpenProductModal] = useState(false);
  const [openCompetitorModal, setOpenCompetitorModal] = useState(false);

  useEffect(() => {
    let selectedProduct = productData.find((t) => t.id == productsSelection.selected);
    setProduct(selectedProduct);
  }, [productsSelection]);

  const handleOpenProductModal = () => {
    setOpenProductModal(true);
  };

  const handleOpenCompetitorModal = () => {
    setOpenCompetitorModal(true);
  };

  return (
    <>
      <Head>
        <title>Đối Thủ | {APP_NAME}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pb: 8,
          px: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} lg={3}>
            <Typography variant="h5">Sản Phẩm</Typography>
            <div style={{ margin: "10px 0" }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                onClick={handleOpenProductModal}
              >
                Thêm Sản Phẩm
              </Button>
            </div>
            {products.length != 0 && (
              <OverviewProductsTable
                items={products}
                selected={productsSelection.selected}
                onSelectOne={productsSelection.handleSelectOnlyOne}
              />
            )}
          </Grid>

          {products.length == 0 && (
            <Grid item xs={12} sm={12} lg={12}>
              <Alert severity="error" variant="outlined">
                <AlertTitle>Không tồn tại sản phẩm</AlertTitle>
              </Alert>
            </Grid>
          )}

          {products.length != 0 && (
            <Grid item xs={12} sm={9} lg={9}>
              <Typography variant="h5">Đối Thủ</Typography>
              {!product && (
                <Alert severity="warning" variant="outlined" sx={{ marginTop: "55px" }}>
                  <AlertTitle>Chọn sản phẩm để xem đối thủ</AlertTitle>
                </Alert>
              )}
              {product && (
                <>
                  <div style={{ margin: "10px 0", textAlign: "right" }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={
                        <SvgIcon fontSize="small">
                          <PlusIcon />
                        </SvgIcon>
                      }
                      onClick={handleOpenCompetitorModal}
                    >
                      Thêm Đối Thủ
                    </Button>
                  </div>
                  <div style={{ margin: "10px 0" }}>
                    <ProductSelectedInfo
                      name={product?.name}
                      code={product?.code}
                      price={product?.price}
                      historicalSold={product?.historicalSold}
                      commentCount={product?.commentCount}
                    ></ProductSelectedInfo>
                  </div>
                  <Stack>
                    <CompetitorTable items={customers} selected={customersSelection.selected} />
                  </Stack>
                </>
              )}
            </Grid>
          )}
        </Grid>
      </Box>
      <ProductModal
        open={openProductModal}
        title="Thêm Sản Phẩm"
        onClose={() => {
          setOpenProductModal(false);
        }}
      ></ProductModal>
      <CompetitorModal
        open={openCompetitorModal}
        title="Thêm Đối Thủ"
        onClose={() => {
          setOpenCompetitorModal(false);
        }}
      ></CompetitorModal>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
