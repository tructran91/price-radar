import PropTypes from "prop-types";
import { Alert, AlertTitle, Card, List, ListItem, ListItemText } from "@mui/material";

export const ProductSelectedInfo = (props) => {
  const { name, code, price, historicalSold, commentCount } = props;

  return (
    <Card>
      <Alert severity="info" variant="outlined" >
        <AlertTitle>{name}</AlertTitle>
        <ul style={{ margin: "0", padding: "0" }}>
          <li>
            Mã sản phẩm: <strong>{code}</strong>
          </li>
          <li>
            Giá: <strong>{price}</strong>
          </li>
          <li>
            Số lượng bán: <strong>{historicalSold}</strong>
          </li>
          <li>
            Số lượng lượt đánh giá: <strong>{commentCount}</strong>
          </li>
        </ul>
      </Alert>
    </Card>
  );
};

ProductSelectedInfo.prototypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  price: PropTypes.string,
  historicalSold: PropTypes.string,
  commentCount: PropTypes.string,
};
