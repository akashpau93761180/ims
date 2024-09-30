import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for Reactstrap components

import PanelHeader from "./PanelHeader.js";
import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
} from "../Variables/charts.js";

const fallbackChartData = {
  labels: ["Loading"],
  datasets: [
    {
      label: "Loading data...",
      data: [0],
      backgroundColor: "rgba(220,220,220,0.5)",
      borderColor: "rgba(220,220,220,0.8)",
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  return (
    <>
      {/* Panel Header with Line Chart */}
      <PanelHeader
        size="lg"
        content={
          dashboardPanelChart.data && dashboardPanelChart.data.datasets ? (
            <Line
              data={dashboardPanelChart.data}
              options={dashboardPanelChart.options}
            />
          ) : (
            <Line data={fallbackChartData} />
          )
        }
      />

      <div className="content">
        <Row>
          {/* Shipped Products Chart */}
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Global Sales</h5>
                <CardTitle tag="h4">Shipped Products</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {dashboardShippedProductsChart.data &&
                  dashboardShippedProductsChart.data.datasets ? (
                    <Line
                      data={dashboardShippedProductsChart.data}
                      options={dashboardShippedProductsChart.options}
                    />
                  ) : (
                    <Line data={fallbackChartData} />
                  )}
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>

          {/* All Products Chart */}
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">2021 Sales</h5>
                <CardTitle tag="h4">All products</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {dashboardAllProductsChart.data &&
                  dashboardAllProductsChart.data.datasets ? (
                    <Line
                      data={dashboardAllProductsChart.data}
                      options={dashboardAllProductsChart.options}
                    />
                  ) : (
                    <Line data={fallbackChartData} />
                  )}
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>

          {/* 24 Hours Performance Bar Chart */}
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Email Statistics</h5>
                <CardTitle tag="h4">24 Hours Performance</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  {dashboard24HoursPerformanceChart.data &&
                  dashboard24HoursPerformanceChart.data.datasets ? (
                    <Bar
                      data={dashboard24HoursPerformanceChart.data}
                      options={dashboard24HoursPerformanceChart.options}
                    />
                  ) : (
                    <Bar data={fallbackChartData} />
                  )}
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Task List */}
          <Col xs={12} md={6}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Backend Development</h5>
                <CardTitle tag="h4">Tasks</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultChecked type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="info"
                            id="tooltip731609871"
                            type="button"
                          >
                            <i className="now-ui-icons ui-2_settings-90" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip731609871"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                          <Button
                            className="btn-round btn-icon btn-icon-mini btn-neutral"
                            color="danger"
                            id="tooltip923217206"
                            type="button"
                          >
                            <i className="now-ui-icons ui-1_simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip923217206"
                          >
                            Remove
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      {/* More task rows... */}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>

          {/* Simple Table */}
          <Col xs={12} md={6}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    {/* More table rows... */}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
