import React, { useState, useRef, useLayoutEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import CustomExpandButton from "./orgExpandButton";
import CustomNodeContent from "./orgNodeContent";
import EmployeeDetailsCard from "./EmployeeDetailsCard";

const styles = {
    orgChart: {
        height: "calc(100vh - 60px)",
        backgroundColor: "azure",
    },
};

const OrganizationalChart = (props) => {
    const d3Container = useRef(null);
    const [cardShow, setCardShow] = useState(false);
    const [employeeId, setEmployeeId] = useState("");

    const handleShow = () => setCardShow(true);
    const handleClose = () => setCardShow(false);

    useLayoutEffect(() => {
        const toggleDetailsCard = (nodeId) => {
            handleShow();
            setEmployeeId(nodeId);
        };

        if (props.data && d3Container.current) {
            d3Container.current.innerHTML = ""; // Clear previous chart

            const chart = new OrgChart();
            chart
                .container(d3Container.current)
                .data(props.data)
                .nodeWidth((d) => 350)
                .nodeHeight((d) => 165)
                .compactMarginBetween((d) => 80)
                .onNodeClick((d) => {
                    toggleDetailsCard(d.data.id);
                })
                .buttonContent((node) => {
                    return ReactDOMServer.renderToStaticMarkup(
                        <CustomExpandButton {...node.node} />
                    );
                })
                .nodeContent((d) => {
                    return ReactDOMServer.renderToStaticMarkup(
                        <CustomNodeContent {...d} />
                    );
                })
                .render();
        }
    }, [props.data]);

    return (
        <div style={styles.orgChart} ref={d3Container}>
            {cardShow && (
                <EmployeeDetailsCard
                    employees={props.data}
                    employee={props.data.find((employee) => employee.id === employeeId)}
                    handleClose={handleClose}
                />
            )}
        </div>
    );
};

export default OrganizationalChart;