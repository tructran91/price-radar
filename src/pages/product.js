import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import BeakerIcon from "@heroicons/react/24/solid/BeakerIcon";
import CurrencyDollarIcon from "@heroicons/react/24/solid/CurrencyDollarIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { ProductsTable } from "src/sections/product/products-table";
import { APP_NAME } from "src/utils/constant";

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    avatar: "/assets/avatars/avatar-carson-darrin.png",
    name: "ma túy tổng hợp",
    code: "123456",
    type: "sp chiến lược",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    avatar: "/assets/avatars/avatar-fran-perez.png",
    name: "cần sa thượng hạng",
    code: "56774",
    type: "sp chiến lược",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    avatar: "/assets/avatars/avatar-jie-yan-song.png",
    name: "xì gà cuba",
    code: "0984456",
    type: "sp thường",
  },
  {
    id: "5e86809283e28b96d2d38537",
    avatar: "/assets/avatars/avatar-anika-visser.png",
    name: "thuốc phiện xứ mường",
    code: "2545362",
    type: "sp chiến lược",
  },
  {
    id: "5e86805e2bafd54f66cc95c3",
    avatar: "/assets/avatars/avatar-miron-vitold.png",
    name: "hoa anh túc sấy khô",
    code: "876555",
    type: "sp thường",
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

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Sản phẩm | {APP_NAME}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pb: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Danh sách sản phẩm</Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    size="small"
                    color="inherit"
                    variant="outlined"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Nhập file Excel
                  </Button>
                  <Button
                    size="small"
                    color="inherit"
                    variant="outlined"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Xuất file Excel
                  </Button>
                  <Button
                    size="small"
                    color="success"
                    variant="outlined"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <BeakerIcon />
                      </SvgIcon>
                    }
                  >
                    Tải file Excel mẫu
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <CurrencyDollarIcon />
                      </SvgIcon>
                    }
                  >
                    Lấy giá toàn bộ sản phẩm
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <ProductsTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
