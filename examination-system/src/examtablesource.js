export const examColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "examtitle",
      headerName: "Exam Title",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
           
            {params.row.examtitle}
          </div>
        );
      },
    },
    {
      field: "course",
      headerName: "Course",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.course}`}>
            {params.row.course}
          </div>
        );
      },
    },
    {
        field: "description",
        headerName: "Description",
        width: 160,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.description}`}>
              {params.row.description}
            </div>
          );
        },
      },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 2,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 3,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 4,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 5,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 6,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 7,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
      id: 8,
      examtitle: "Programming Language",
      course: "BSIT",
      description: "Execute 10 programs in 1 hour"
    },
    {
        id: 9,
        examtitle: "Programming Language",
        course: "BSIT",
        description: "Execute 10 programs in 1 hour"
    },
    {
        id: 10,
        examtitle: "Programming Language",
        course: "BSIT",
        description: "Execute 10 programs in 1 hour"
    },
  ];
  