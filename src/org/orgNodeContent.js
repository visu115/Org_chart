import React from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const styles = {
    nodeContainer: {
        minHeight: "170px",
        backgroundColor: "#FFFFFF",
        color: "#227c9d",
        display: "flex",
        justifyContent: "center",
        borderRadius: "1rem",
        position: 'relative'
    },
    nodeDetails: {
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nodeContent: {
        display: "flex",
        alignItems: "center",
    },
    nodeTeam: {
        width: "100%",
        textAlign: "center",
    },
    nodeTeamName: {
        marginBottom: "0.5rem",
        color: "#5499c7",
        fontSize: "1.5rem",
    },
    nodeTeamMemberImg: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "0.2rem",
    },
    nodeImg: {
        width: "110px",
        height: "110px",
        borderRadius: "1rem",

    },
    nodeInfo: {
        marginLeft: "1.5rem",
        color: "#5499c7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    nodeName: {
        paddingBottom: "0.3rem",
        fontSize: "1.1rem",
        fontWeight: "bold",
    },
    nodeRole: {
        paddingBottom: "0.5rem",
        fontSize: "1rem",
        // display: 'flex',
        // alignItems: 'center',
    },
    nodeDepartment: {
        padding: "0.5rem",
        textAlign: "center",
        // display: "flex",
        alignItems: "center",
        backgroundColor: "#5499C7",
        borderRadius: "1rem",
        color: "#FFFFFF",
    },
    icon: {
        marginRight: "0.5rem",
        fontSize: '10px'
    },
};

const CustomNodeContent = (props) => {
    return (
        <>
            <div style={styles.nodeContainer}>
                <div style={styles.nodeDetails}>
                    {props.data && props.data.team === "" ? (
                        <div style={styles.nodeContent}>
                            <img
                                style={styles.nodeImg}
                                src={props.data.imageUrl}
                                alt="Profile"
                            />

                            <div style={styles.nodeInfo}>
                                <div style={styles.nodeName}>{props.data.name}</div>
                                <div style={styles.nodeRole}>{props.data.positionName}</div>
                                {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
                                {/* <div className="ph_icon"><LocalPhoneIcon color="#5499c7" /></div> */}
                                <div style={styles.nodeRole}>{props.data.phone}</div>
                                {/* </div> */}
                                {props.data.department && (
                                    <div style={styles.nodeDepartment}>
                                        <div style={{ textAlign: 'center' }}>{props.data.department}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div style={styles.nodeTeam}>
                            <div style={styles.nodeTeamName}>{props.data.team}</div>
                            {Array.isArray(props._children) &&
                                props._children.slice(0, 4).map((child) => (
                                    child.data && ( // Check if `child.data` exists
                                        <img
                                            key={child.data.id}
                                            style={styles.nodeTeamMemberImg}
                                            src={child.data.imageUrl}
                                            alt="team member"
                                        />
                                    )
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default CustomNodeContent;
