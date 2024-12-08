import { useContext, useEffect } from "react";
import "./Table.css";
import { Store } from "../../context/store";
import { DataTableHead } from "../../types";
import { Button } from "../Button/Button";
import { dateFormat } from "../../utils";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Table = () => {
  const { data, actions } = useContext(Store);

  useEffect(() => {
    actions.loadData();
  }, []);

  return (
    <div className="data-table-container">
      <table cellSpacing={0} className="data-table">
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="align-start">
                <AiOutlineArrowDown></AiOutlineArrowDown>
                {DataTableHead.name}
                <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
              </div>
            </th>
            <th>
              <div className="align-start">
                {DataTableHead.lastUpdatedAt}
                <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
              </div>
            </th>
            <th>
              <div>
                {DataTableHead.trailingGrowth}
                <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
              </div>
            </th>
            <th>
              <div>
                {DataTableHead.quarterToDate}
                <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
              </div>
            </th>
            <th>
              <div>
                {DataTableHead.quarterToDateValueComparison}
                <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <Button icon="plus" />
              </td>
              <td>
                <div className="cell-name">
                  <span>{row.name}</span>
                </div>
                <div className="cell-type">
                  <span>{row.type}</span>
                </div>
              </td>
              <td className="cell-updated-at">
                Updated {dateFormat(row.lastUpdatedAt)}
              </td>
              <td className="cell-info">
                <div className="cell-info-main">
                  <span>
                    {row.trailingGrowth.main.value}
                    {row.trailingGrowth.main.unit}
                  </span>
                  <span>{row.trailingGrowth.main.period}</span>
                </div>
                <div className="cell-info-secondary">
                  <span
                    className={
                      row.trailingGrowth.secondary.value > 0
                        ? "positive"
                        : "negative"
                    }
                  >
                    {row.trailingGrowth.secondary.value}
                    {row.trailingGrowth.secondary.unit}
                  </span>
                  <span>{row.trailingGrowth.secondary.period}</span>
                </div>
              </td>
              <td className="cell-info">
                <div className="cell-info-main">
                  <span>
                    {row.quarterToDate.main.value}
                    {row.quarterToDate.main.unit}
                  </span>
                  <span>{row.quarterToDate.main.period}</span>
                </div>
                <div className="cell-info-secondary">
                  <span
                    className={
                      row.quarterToDate.secondary.value > 0
                        ? "positive"
                        : "negative"
                    }
                  >
                    {row.quarterToDate.secondary.value}
                    {row.quarterToDate.secondary.unit}
                  </span>
                  <span>{row.quarterToDate.secondary.period}</span>
                </div>
              </td>
              <td className="cell-info">
                {row.quarterToDateValueComparison ? (
                  <div className="cell-info-main">
                    <span
                      className={
                        row.quarterToDateValueComparison.main.value > 0
                          ? "positive"
                          : "negative"
                      }
                    >
                      {row.quarterToDateValueComparison.main.value}
                      {row.quarterToDateValueComparison.main.unit}
                    </span>
                    <span>{row.quarterToDateValueComparison.main.period}</span>
                  </div>
                ) : (
                  <div className="cell-info-main">
                    <span>--</span>
                  </div>
                )}
                {row.quarterToDateValueComparison ? (
                  <div className="cell-info-secondary">
                    <span
                      className={
                        row.quarterToDateValueComparison.secondary.value > 0
                          ? "positive"
                          : "negative"
                      }
                    >
                      {row.quarterToDateValueComparison.secondary.value}
                      {row.quarterToDateValueComparison.secondary.unit}
                    </span>
                    <span>
                      {row.quarterToDateValueComparison.secondary.period}
                    </span>
                  </div>
                ) : (
                  <div className="cell-info-secondary">
                    <span>--</span>
                  </div>
                )}
              </td>
              <td>
                <Button icon="document" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
