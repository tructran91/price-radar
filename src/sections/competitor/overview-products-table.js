import PropTypes from "prop-types";
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";

export const OverviewProductsTable = (props) => {
  const { items = [], selected = [], onSelectOne } = props;

  return (
    <>
      <Card>
        <Scrollbar>
          <Box>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tên sản phẩm</TableCell>
                  <TableCell>Hình ảnh</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((product) => {
                  const isSelected = selected.includes(product.id);

                  return (
                    <TableRow hover key={product.id} selected={isSelected} onClick={(e) => {onSelectOne?.(product.id)}}>
                      <TableCell>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Typography variant="subtitle2" color={product.isHeroType ? "#F04438" : ""}>{product.name}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <img width="80px" src={`${product.image}`}></img>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
      </Card>
      <div style={{ marginTop: "10px" }}>
        <Typography variant="subtitle2" color="#F04438">
          * Sản phẩm chiến lược
        </Typography>
        <Typography variant="subtitle2">* Sản phẩm thường</Typography>
      </div>
    </>
  );
};

OverviewProductsTable.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.array,
  onSelectOne: PropTypes.func,
};
