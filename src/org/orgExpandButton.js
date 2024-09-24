import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const styles = {
    expandBtn: {
        width: "40px",
        height: "20px",
        padding: '7px',
        fontSize: '17px',
        margin: "auto",
        color: "#227c9d",
        backgroundColor: "#fef9ef",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #d3d3d3",
        borderRadius: "50%",
        cursor: "pointer",
    },
    arrow: {
        width: "20px",
        height: "8px",

        margin: "auto",
        color: "#227c9d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    }
};

const CustomExpandButton = (node) => {
    if (!node || !node.data) {
        return null; // Handle case when node data is undefined
    }

    const handleExpandClick = () => {
        if (node.expandCollapse) {
            node.expandCollapse();
        }
    };

    return (
        <div style={styles.expandBtn} onClick={handleExpandClick}>
            <span>{node.data._directSubordinates}</span>
            <span style={styles.arrow}>  {node.children ? <ExpandMoreIcon /> : <ExpandLessIcon />}</span>
        </div>
    );
};

export default CustomExpandButton;

