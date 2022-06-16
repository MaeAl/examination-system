export const userColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "subjectname",
      headerName: "Subject Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
           
            {params.row.subjectname}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      subjectname: "Programming Language",
      status: "active"
    },
    {
      id: 2,
      subjectname: "Hardware",
      status: "active"
    },
    {
      id: 3,
      subjectname: "SIA",
      status: "active"
    },
    {
      id: 4,
      subjectname: "System Administration",
      status: "active"
    },
    {
      id: 5,
      subjectname: "Foreign Language",
      status: "active"
    },
    {
      id: 6,
      subjectname: "Web System and Technologies",
      status: "active"
    },
    {
      id: 7,
      subjectname: "Mobile and Application development",
      status: "active"
    },
    {
      id: 8,
      subjectname: "Multimedia",
      status: "active"
    },
    {
        id: 9,
        subjectname: "Discrete",
        status: "active"
    },
    {
        id: 10,
        subjectname: "Introduction to Computing",
        status: "active"
    },
  ];
  