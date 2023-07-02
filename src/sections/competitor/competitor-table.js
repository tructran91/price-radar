import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import ArrowTrendingUpIcon from "@heroicons/react/24/solid/ArrowTrendingUpIcon";
import Link from "next/link";

export const CompetitorTable = (props) => {
  const { items = [], selected = [] } = props;

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Tên đối thủ</TableCell>
                <TableCell>Giá bán</TableCell>
                <TableCell width={75}>SL Bán</TableCell>
                <TableCell width={105}>SL Đánh giá</TableCell>
                <TableCell width={115}>Hình ảnh</TableCell>
                <TableCell width={100}>Link SP</TableCell>
                <TableCell width={125}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer.id);

                return (
                  <TableRow hover key={customer.id} selected={customer.isOwner}>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">{customer.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{customer.price}</TableCell>
                    <TableCell>{customer.historicalSold}</TableCell>
                    <TableCell>{customer.commentCount}</TableCell>
                    <TableCell>
                      <img width="80px" src={`${customer.image}`}></img>
                    </TableCell>
                    <TableCell>
                      <Link href="https://vnexpress.net/" target="_blank">
                        {customer.link}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Sửa đối thủ">
                        <IconButton color="warning">
                          <SvgIcon fontSize="small">
                            <PencilIcon />
                          </SvgIcon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Xóa đối thủ">
                        <IconButton color="error">
                          <SvgIcon fontSize="small">
                            <XMarkIcon />
                          </SvgIcon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Lịch sử giá">
                        <Link href="/competitor/price-history">
                          <IconButton color="success">
                            <SvgIcon fontSize="small">
                              <ArrowTrendingUpIcon />
                            </SvgIcon>
                          </IconButton>
                        </Link>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
    </Card>
  );
};

CompetitorTable.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.array,
};
