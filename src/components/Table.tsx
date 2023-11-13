import React, { FC } from "react";
import {
  Table,
  Column,
  TableCellProps,
  AutoSizer,
  InfiniteLoader,
} from "react-virtualized";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import { Typography, Theme } from "@mui/material";
import { StyledBodyTableTypography } from "../styled/typography.styled";

function VirtualizedTable(props) {
  const {
    columns = [],
    data = [],
    loadMoreRows,
    isRowLoaded,
    classes,
    minHeight,
    ...tableProps
  } = props;

  const cellRenderer: FC<TableCellProps> = ({ cellData, columnIndex }) => {
    return (
      <TableCell component="div" variant="body" align="left">
        <StyledBodyTableTypography>
          {cellData ? cellData : "-"}
        </StyledBodyTableTypography>
      </TableCell>
    );
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        //border: '0.5px solid #ddd',
        display: "flex",
        minHeight: minHeight ? minHeight : "580px",
        flexGrow: 1,
        bgcolor: "#FFF",
        width: "100%",
        flex: 1,
      }}
    >
      <AutoSizer style={{ width: "100%", height: "100%" }}>
        {({ width, height }) => {
          const computedColumns = columns.map((column) => ({
            ...column,
            width: (column.width / 100) * width,
          }));

          return (
            <InfiniteLoader
              loadMoreRows={loadMoreRows}
              isRowLoaded={isRowLoaded}
              rowCount={2000000}
            >
              {({ onRowsRendered }) => (
                <Table
                  {...tableProps}
                  width={width}
                  height={height - 48}
                  rowHeight={48}
                  headerHeight={48}
                  onRowsRendered={onRowsRendered}
                >
                  {computedColumns.map(
                    ({ dataKey, width, ...other }, index) => {
                      return (
                        <Column
                          width={width}
                          key={dataKey}
                          headerRenderer={(headerProps) => (
                            <TableCell
                              component="div"
                              variant="head"
                              align="left"
                      
                            >
                              <Typography
                                sx={{
                                  fontSize: 12,
                                  color: "text.primary",
                                  fontWeight: 600,
                                }}
                                variant="subtitle2"
                                fontSize={13}
                              >
                                {headerProps.label}
                              </Typography>
                            </TableCell>
                          )}
                          cellRenderer={cellRenderer}
                          dataKey={dataKey}
                          {...other}
                        />
                      );
                    }
                  )}
                </Table>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </Paper>
  );
}

export default VirtualizedTable;
