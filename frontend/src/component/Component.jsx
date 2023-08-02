
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Icon } from "@iconify/react";
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//import Avatar from "@mui/material/Avatar";

import Avatar from "@mui/material/Avatar";

function MyComponent() {
 const [data, setData] = useState([]);
 const [userActivity, setUserActivity] = useState([]);
 const [showAllData, setShowAllData] = useState(false);
 const [isViewAllClicked, setIsViewAllClicked] = useState(false);
 const [showAllUserActivity, setShowAllUserActivity] = useState(false);

 function ViewAllButton({ onViewAllClick }) {
 return (
 <Box
 display="flex"
 justifyContent="flex-end"
 marginRight="900px"
 marginTop="10px"
 >
 <a href="about:blank" target="_blank">
 View All
 </a>
 </Box>
 );
 }

 useEffect(() => {
 getData();
 getUserActivityData();
 }, []);
 const handleViewAllClick = () => {
 setIsViewAllClicked(true);
 setShowAllData(true);
 // event.preventDefault();

 console.log("View All clicked for DataGrid!");
 };

 const handleViewAllUserActivityClick = () => {
 setShowAllUserActivity(true);
 };

 const getData = () => {
 fetch("/data.json", {
 headers: {
 "Content-Type": "application/json",
 Accept: "application/json",
 },
 })
 .then((response) => response.json())
 .then((myJson) => {
 // Add a unique 'id' property to each row
 const formattedData = myJson.tracking_data.map((row, index) => ({
 id: index + 1,
 ...row,
 }));

 setData(formattedData);
 })
 .catch((error) => console.error("Error fetching data:", error));
 };

 const getUserActivityData = () => {
 fetch("/data.json", {
 headers: {
 "Content-Type": "application/json",
 Accept: "application/json",
 },
 })
 .then((response) => response.json())
 .then((myJson) => {
 setUserActivity(myJson.employee_data);
 })
 .catch((error) =>
 console.error("Error fetching user activity data:", error)
 );
 };
 const employeeColumns = [
 { field: "name", headerName: "Name", width: 200 },
 { field: "description", headerName: "Description", width: 250 },
 {
 field: "avatar",
 headerName: "Avatar",
 width: 150,
 renderCell: (params) => (
 <Avatar alt={params.row.name} src={params.value} />
 ),
 },
 { field: "created_at", headerName: "Created At", width: 200 },
 ];

 const columns = [
 {
 field: "tracking_no",
 headerName: "Tracking No",
 width: 150,
 headerClassName: "bold-header",
 },
 {
 field: "product_no",
 headerName: "Product No",
 width: 150,
 headerClassName: "bold-header",
 },
 {
 field: "total_orders",
 headerName: "Total Orders",
 width: 150,
 headerClassName: "bold-header",
 },

 {
 field: "status",
 headerName: "Status",
 width: 150,
 renderCell: (params) => (
 <Box display="flex" alignItems="center">
 <FiberManualRecordIcon
 sx={{ fontSize: "small", color: getStatusColor(params.value) }}
 />
 <Typography
 variant="body2"
 component="span"
 sx={{ marginLeft: 1, fontWeight: "bold" }}
 >
 {params.value}
 </Typography>
 </Box>
 ),
 },
 { field: "completed", headerName: "Completed", width: 150 },
 ];
 const getStatusColor = (status) => {
 switch (status) {
 case "Rejected":
 return "red";
 case "Delivered":
 return "green";
 default:
 return "yellow";
 }
 };
 const handleFileUpload = (event) => {
 const files = event.target.files;

 console.log("Uploaded files:", files);
 };

 return (
 <Box display="flex" flexDirection="column">
 <Box display="flex" justifyContent="space-between">
 {/* Dropbox */}
 <Box
 sx={{
 width: "18%",
 height: 50,
 bgcolor: "#fff",
 borderRadius: 8,
 padding: 10,
 boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
 marginTop: "20px",
 marginLeft: " 50px",
 display: "flex",
 alignItems: "center",
 // flexDirection: "column",
 // alignItems: "center",
 }}
 >
 <Icon icon="logos:dropbox" width="100" height="100" />
 <Typography variant="body1" fontWeight="bold">
 Dropbox
 </Typography>
 <LinearProgress
 variant="determinate"
 value={80}
 sx={{
 width: "100%",
 height: 10,
 borderRadius: 5,
 marginTop: "100px",
 marginBottom: "7px",
 // marginRight: "260px",
 }}
 />
 </Box>
 {/* Drive */}
 <Box
 sx={{
 width: "18%",
 height: 50,
 bgcolor: "#fff",
 borderRadius: 8,
 padding: 10,
 boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
 marginTop: "20px",
 display: "flex",
 alignItems: "center",
 }}
 >
 {/* <AddToDriveIcon /> */}
 <Icon icon="logos:google-drive" width="100" height="100" />
 <Typography variant="body1" fontWeight="bold">
 Drive
 </Typography>
 <LinearProgress
 variant="determinate"
 value={80} // Replace this value with the actual progress value (0 to 100)
 sx={{
 width: "100%",
 height: 10,
 borderRadius: 5,
 marginTop: "100px",
 marginBottom: "7px",
 // marginRight: "260px",
 }}
 />
 </Box>
 {/* One Drive */}
 <Box
 sx={{
 width: "18%",
 height: 50,
 bgcolor: "#fff",
 borderRadius: 8,
 padding: 10,
 boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
 marginTop: "30px",
 marginRight: " 60px",
 display: "flex",
 alignItems: "center",
 }}
 >
 <Icon icon="logos:microsoft-onedrive" width="100" height="100" />

 <Typography variant="body1" fontWeight="bold">
 One Drive
 </Typography>
 <LinearProgress
 variant="determinate"
 value={80}
 sx={{
 width: "100%",
 height: 10,
 borderRadius: 5,
 marginTop: "80px",
 marginBottom: "7px",
 // marginRight: "260px",
 }}
 />
 </Box>
 </Box>
 {/* Middle Section - Recent Orders */}
 <Box>
 <Typography
 variant="h6"
 component="h3"
 fontWeight="bold"
 sx={{
 marginTop: "20px",
 marginBottom: "5px",
 marginLeft: "50px",
 }}
 >
 Recent Orders
 </Typography>

 <ViewAllButton onViewAllClick={handleViewAllClick} />
 <Box>
 <Box display="flex"></Box>
 </Box>
 <Box
 display={!showAllData ? "flex" : "none"}
 flexDirection="row"
 justifyContent="space-between"
 alignItems="center"
 marginTop="20px"
 marginBottom="20px"
 marginLeft="50px"
 width="100%"
 >
 {/* DataGrid Table */}
 <Box
 style={{
 height: 555,
 width: "50%",
 boxShadow: "50px 50px 90px rgba(0, 0, 0, 0.1)",
 }}
 >
 {/* <DataGrid rows={data} columns={columns} pageSize={5} /> */}
 <DataGrid
 rows={data}
 columns={columns}
 pageSize={showAllData ? data.length : 5} //
 />
 </Box>
 </Box>
 {/* DataGrid Table for View All */}
 <Box
 display={
 (showAllData || isViewAllClicked) && data.length > 0
 ? "flex"
 : "none"
 }
 flexDirection="row"
 justifyContent="space-between"
 alignItems="center"
 marginTop="20px"
 marginBottom="20px"
 marginLeft="50px"
 width="100%"
 >
 <Box
 style={{
 height: 555,
 width: "100%",
 boxShadow: "50px 50px 90px rgba(0, 0, 0, 0.1)",
 }}
 >
 <DataGrid rows={data} columns={columns} pageSize={data.length} />
 </Box>
 </Box>
 </Box>
 {/* Right Section - File Upload */}
 <Box
 display="flex"
 flexDirection="row"
 justifyContent="flex-end"
 paddingRight="50px"
 marginTop="-548px"
 >
 <Box
 sx={{
 width: "550px",
 height: "50px",
 bgcolor: "#fff",
 borderRadius: 1,
 padding: 10,
 backgroundImage: "linear-gradient(135deg, #F0F0F0 0%, #fff 60%)",
 boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 marginTop: "-20px",
 }}
 >
 {/* Upload file icon */}
 <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
 <Icon icon="ep:upload-filled" width="80" height="900" />
 </label>
 {/* Input element for file upload */}
 <input
 type="file"
 id="file-upload"
 style={{ display: "none" }}
 onChange={handleFileUpload}
 />
 <Typography variant="body1" fontWeight="Semi Bold">
 upload file
 </Typography>
 </Box>
 </Box>
 {/* Main Card */}
 <Box
 display="flex"
 flexDirection="row"
 justifyContent="flex-end"
 paddingRight="50px"
 marginTop="35px"
 >
 <Box display="flex" flexDirection="column">
 {/* Main Card */}
 <Box
 sx={{
 width: "550px",
 height: "120px",
 bgcolor: "#fff",
 borderRadius: 1,
 padding: 10,
 backgroundImage: "linear-gradient(135deg, #F0F0F0 0%, #fff 60%)",
 boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.3)",
 marginLeft: "5283px",
 marginBottom: "500px",
 overflow: "hidden",
 display: "block",
 overflowY: "auto",
 marginTop: "10px",
 position: "relative",
 }}
 marginLeft="20px"
 marginTop="1px"
 >
 {/* Heading */}
 <Box
 sx={{
 position: "absolute",
 top: 0,
 left: 0,
 width: "100%",
 height: "37px",
 bgcolor: "#fff",
 borderTopLeftRadius: 5,
 borderTopRightRadius: 5,
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 border: "1px solid #ddd",
 padding: "3px",
 }}
 >
 <Typography
 variant="h6"
 component="h3"
 fontWeight="bold"
 sx={{
 position: "absolute",
 top: 0,
 left: 0,
 marginLeft: "20px",
 }}
 >
 User Activity
 </Typography>
 </Box>

 {/* Main content */}

 <List>
 {showAllUserActivity
 ? // If showAllUserActivity is true, show all user activities
 userActivity.map((activity) => (
 <ListItemButton key={activity.id}>
 {/* Employee Avatar */}
 <Avatar alt={activity.name} src={activity.avatar} />
 {/* Status Indicator Dot */}
 <FiberManualRecordIcon
 sx={{
 fontSize: "bold",
 color: getStatusColor(activity.completed),
 position: "absolute",
 bottom: "5px",
 left: "-18px",
 }}
 />
 {/* Employee Name and Description */}
 <ListItemText
 primary={activity.name}
 secondary={activity.description}
 />
 {/* Created At */}
 <ListItemText
 primary={new Date(activity.created_at).toLocaleString()}
 secondary="Created At"
 style={{ textAlign: "right" }}
 />
 </ListItemButton>
 ))
 : // If showAllUserActivity is false, show only the first 5 user activities
 userActivity.slice(0, 5).map((activity) => (
 <ListItemButton key={activity.id}>
 {/* Employee Avatar */}
 <Avatar alt={activity.name} src={activity.avatar} />
 {/* Status Indicator Dot */}
 <FiberManualRecordIcon
 sx={{
 fontSize: "bold",
 color: getStatusColor(activity.completed),
 position: "absolute",
 bottom: "5px",
 left: "-18px",
 }}
 />
 {/* Employee Name and Description */}
 <ListItemText
 primary={activity.name}
 secondary={activity.description}
 />
 {/* Created At */}
 <ListItemText
 primary={new Date(activity.created_at).toLocaleString()}
 secondary="Created At"
 style={{ textAlign: "right" }}
 />
 </ListItemButton>
 ))}
 </List>

 {/* View All Button */}
 {!showAllUserActivity && userActivity.length > 5 && (
 <Box
 sx={{
 position: "absolute",
 bottom: "5px",
 right: "20px",
 }}
 >
 <Typography
 variant="body2"
 component="span"
 sx={{
 cursor: "pointer",
 textDecoration: "underline",
 }}
 onClick={handleViewAllUserActivityClick}
 >
 View All
 </Typography>
 </Box>
 )}
 </Box>
 </Box>
 </Box>
 </Box>
 );
}
export default MyComponent;