const employees = [
    {
        id: 1,
        parentId: "",
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/MD.jpg',
        name: 'Duraisamy P',
        phone: '562 - 237',
        email: 'duraisamy.p@gmail.com',
        team: "",
        department: 'Director',
        positionName: 'MD'

    },
    {
        id: 2,
        parentId: 1,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Naveen.jpg',
        name: 'Naveen Kumar D',
        phone: '562 - 238',
        email: 'naveen.kumar@gmail.com',
        team: "",
        department: 'Executive Director',
        positionName: 'ED'
    },
    {
        id: 3,
        parentId: 1,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/JMD.jpg',
        name: 'Tamilarasi Duraisamy',
        phone: '562 - 239',
        email: 'tamilarasi.duraisamy@gmail.com',
        team: "",
        department: 'Director',
        positionName: 'JMD'
    },
    {
        id: 4,
        parentId: 1,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Sruthi_S_-_FD.jpg',
        name: 'Sruthi Suresh',
        phone: '562 - 240',
        email: 'sruthi.suresh@gmail.com',
        team: "",
        department: 'Director',
        positionName: 'FD'
    },
    {
        id: 5,
        parentId: 13,
        team: "IT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 6,
        parentId: 13,
        team: "System Admin",
    },
    {
        id: 7,
        parentId: 13,
        team: "AI Vision",
    },
    {
        id: 18,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Deepa_R.jpg',
        name: 'Deepa R',
        phone: '562 - 243',
        email: 'deepa@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 19,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Sathyapriya.jpg',
        name: 'Sathyapriya A',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 20,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Natchathra.jpg',
        name: 'Natchathra ',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 21,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Pradeep_Kumar_S.jpg',
        name: 'Pradeep Kumar ',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 22,
        parentId: 5,
        imageUrl: '',
        name: 'Tamilarasan ',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 23,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Photocopy1.jpg',
        name: 'Prem Kumar G',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 23,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/vinith.jpg',
        name: 'Vinith G',
        phone: '562 - 243',
        email: 'Vinith@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 24,
        parentId: 5,
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Capture9.png',
        name: 'Visu',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 25,
        parentId: 5,
        imageUrl: '',
        name: 'Madhavan ',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 26,
        parentId: 5,
        imageUrl: '',
        name: 'Bharathiraja',
        phone: '562 - 243',
        email: 'prem.kumar@gmail.com',
        positionName: 'Developer',
        team: "",
        department: 'IT',
    },
    {
        id: 27,
        parentId: 6,
        name: 'Jinanthar',
        imageUrl: '',
        phone: '562 - 243',
        email: 'deepa@gmail.com',
        positionName: 'System Admin',
        team: "",
        department: 'IT',
    },
    {
        id: 28,
        parentId: 7,
        name: 'Raja',
        imageUrl: 'blob:https://web.whatsapp.com/a913f232-d3ee-4761-9bd4-5c6f73ad8c1f',
        phone: '562 - 243',
        email: 'deepa@gmail.com',
        positionName: 'Ai Vision',
        team: "",
        department: 'IT',
    },
    {
        id: 29,
        parentId: 7,
        imageUrl: 'blob:https://web.whatsapp.com/0ad5c274-6867-4cb5-929e-48f5a77482bb',
        name: 'Rahul Mani',
        phone: '562 - 243',
        email: 'deepa@gmail.com',
        positionName: 'Ai Vision',
        team: "",
        department: 'IT',
    },
    {
        id: 9,
        parentId: 2, // Employees under Naveen Kumar (parentId 2)
        name: 'Senthil Kumar G',
        phone: '562 - 244',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Senthil_Kumar_G.jpg',
        email: 'senthil.kumar@gmail.com',
        positionName: 'Deputy General Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 30,
        parentId: 9, // Employees under Naveen Kumar (parentId 2)
        name: 'JaiKumar ',
        imageUrl: '',
        phone: '562 - 244',
        email: 'senthil.kumar@gmail.com',
        positionName: 'Jr.Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 31,
        parentId: 9, // Employees under Naveen Kumar (parentId 2)
        name: 'Mohan',
        imageUrl: '',
        phone: '562 - 244',
        email: 'senthil.kumar@gmail.com',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 32,
        parentId: 9, // Employees under Naveen Kumar (parentId 2)
        name: 'Ranjith',
        imageUrl: '',
        phone: '562 - 244',
        email: 'senthil.kumar@gmail.com',
        positionName: 'Sr.Automation Engineer',
        team: "",
        department: '',
    },
    {
        id: 10,
        parentId: 2,
        name: 'Divya Kumari P',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Divyakumari_P.jpg',
        phone: '562 - 245',
        email: 'divya.kumari@gmail.com',
        positionName: 'General Manager',
        team: "",
        department: 'HR',
    },
    {
        id: 33,
        parentId: 10,
        team: "Admin & HR",
    },
    {
        id: 34,
        parentId: 10,
        team: "House Keeping",
    },
    {
        id: 35,
        parentId: 33,
        name: 'Mahalakshmi',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Mahalakshmi_A.jpg',
        phone: '562 - 246',
        email: 'Mahalakshmi.d@gmail.com',
        positionName: 'Executive',
        team: "",
        department: 'HR',
    },
    {
        id: 36,
        parentId: 33,
        name: 'Vanitha',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Vanitha_V.jpg',
        phone: '562 - 246',
        email: 'Vanitha.d@gmail.com',
        positionName: 'Executive',
        team: "",
        department: 'HR',
    },
    {
        id: 37,
        parentId: 33,
        name: 'Priyanka',
        imageUrl: '',
        phone: '562 - 246',
        email: 'Priyanka.d@gmail.com',
        positionName: 'Front Office Executive',
        team: "",
        department: 'Admin',
    },
    {
        id: 38,
        parentId: 33,
        name: 'Soniya',
        imageUrl: 'blob:https://web.whatsapp.com/0fd8bcf6-4ad4-4a2b-b8e3-db41b34ecb5d',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'Executive',
        team: "",
        department: 'Admin',
    },
    {
        id: 39,
        parentId: 33,
        name: 'Sangeetha',
        imageUrl: '',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'Email Incharge',
        team: "",
        department: 'Admin',
    },
    {
        id: 40,
        parentId: 33,
        name: 'Amudha',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Amutha_A.jpg',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'Executive',
        team: "",
        department: 'HR',
    },
    {
        id: 41,
        parentId: 34,
        name: 'Sasikala',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Sasikala_N.jpg',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'House Keeping',
        team: "",
        department: '',
    },
    {
        id: 42,
        parentId: 41,
        name: 'Mari A',
        imageUrl: '',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'House Keeping',
        team: "",
        department: '',
    },
    {
        id: 43,
        parentId: 41,
        name: 'Mari V',
        phone: '562 - 246',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Mary_V.jpg',
        email: 'kalpana.d@gmail.com',
        positionName: 'House Keeping',
        team: "",
        department: '',
    },
    {
        id: 44,
        parentId: 41,
        name: 'Amudha D',
        imageUrl: '',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'House Keeping',
        team: "",
        department: '',
    },
    {
        id: 45,
        parentId: 41,
        name: 'Mariyalatha',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Mariyalatha_W.jpg',
        phone: '562 - 246',
        email: 'kalpana.d@gmail.com',
        positionName: 'House Keeping',
        team: "",
        department: '',
    },
    {
        id: 12,
        parentId: 2,
        name: 'Amirtharaj A',
        phone: '562 - 247',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Amirtharaj_A.jpg',
        email: 'amirtharaj.a@gmail.com',
        positionName: 'General Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 13,
        parentId: 2,
        name: 'Gomathi S',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Gomathi. D.jpg',
        phone: '562 - 248',
        email: 'gomathi.s@gmail.com',
        positionName: 'Asst General Manager',
        team: "",
        department: 'IT',
    },
    {
        id: 14,
        parentId: 2,
        name: 'Srinivasaraju',
        phone: '562 - 249',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Srinivasaraju%20M.jpg',
        email: 'srinivasaraju@gmail.com',
        positionName: 'General Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 15,
        parentId: 2,
        name: 'Ayyasamy',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Ayyasamy_A.jpg',
        phone: '562 - 250',
        email: 'ayaasamy@gmail.com',
        positionName: 'General Manager',
        team: "",
        department: 'Weighing',
    },
    {
        id: 16,
        parentId: 2,
        name: 'Santhakumar',
        phone: '562 - 251',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Santhakumar_P1.jpg',
        email: 'santhakumar@gmail.com',
        positionName: 'Coimbatore Regional Director',
        team: "",
        department: 'Sales',
    },
    {
        id: 17,
        parentId: 2,
        name: 'Rathi',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Rathi_PS.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Deputy General Manager',
        team: "",
        department: 'Cost Audit',
    },
    {
        id: 46,
        parentId: 2,
        name: 'Kalpana D',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Kalpana.%20R.JPG',
        phone: '562 - 251',
        email: 'Kalpana@gmail.com',
        location: 'Chennai',
        positionName: 'General Manager',
        team: "",
        department: 'Purchase',
    },
    {
        id: 47,
        parentId: 46,
        team: "Purchase Dept",
    },
    {
        id: 48,
        parentId: 46,
        team: "Billing Dept",
    },
    {
        id: 49,
        parentId: 46,
        team: "Stores Dept",
    },
    {
        id: 50,
        parentId: 46,
        team: "OEM Dept",
    },
    {
        id: 51,
        parentId: 47,
        name: 'Sivasankari',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Siva%20Sankari.%20V.jpg',
        phone: '562 - 251',
        email: 'Sivasankari@gmail.com',
        location: 'Chennai',
        positionName: 'Sr.Manager',
        team: "",
        department: 'Purchase',
    },
    {
        id: 52,
        parentId: 51,
        name: 'Pushpalatha',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Pushpalatha_M.jpg',
        phone: '562 - 251',
        email: 'Pushpalatha@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Purchase',
    },
    {
        id: 53,
        parentId: 51,
        name: 'Vanitha',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Vanitha_D.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Purchase',
    },
    {
        id: 54,
        parentId: 51,
        name: 'Ashwini',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Aswini_N.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Purchase',
    },
    {
        id: 55,
        parentId: 51,
        name: 'Dhanushya',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Dhanushya_D.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Purchase',
    },
    {
        id: 56,
        parentId: 51,
        name: 'Padmavathy',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Padmavathy_S.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Purchase',
    },
    {
        id: 57,
        parentId: 48,
        name: 'Vijayalakshmi',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Vijayalakshmi.%20R.JPG',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Manager',
        team: "",
        department: 'Billing',
    },
    {
        id: 58,
        parentId: 57,
        name: 'Subhashini p',
        imageUrl: '',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Billing',
    },
    {
        id: 59,
        parentId: 57,
        name: 'Suganya',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Suganya_-_New.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Billing',
    },
    {
        id: 60,
        parentId: 57,
        name: 'Subhashini B',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Billing',
    },
    {
        id: 61,
        parentId: 57,
        name: 'Dhivya Priya',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Billing',
    },
    {
        id: 62,
        parentId: 57,
        name: 'Sandhiya',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Billing',
    },
    {
        id: 63,
        parentId: 57,
        name: 'Kerthika',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Keerthika_E.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Billing',
    },
    {
        id: 64,
        parentId: 49,
        name: 'Latha K',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Latha.%20K.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Manager',
        team: "",
        department: 'Logistics',
    },
    {
        id: 65,
        parentId: 64,
        team: "Stores",
    },
    {
        id: 66,
        parentId: 64,
        team: "Security",
    },
    {
        id: 67,
        parentId: 64,
        team: "Driver",
    },
    {
        id: 68,
        parentId: 65,
        name: 'Lakshmi',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Lakshmi_R.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Stores',
    },
    {
        id: 69,
        parentId: 65,
        name: 'Radha',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Radha.%20G.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'Stores',
    },
    {
        id: 70,
        parentId: 65,
        name: 'Lavanya',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Executive',
        team: "",
        department: 'Stores',
    },
    {
        id: 71,
        parentId: 65,
        name: 'Ramya',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Executive',
        team: "",
        department: 'Stores-',
    },
    {
        id: 72,
        parentId: 66,
        name: 'Dilli Prasad',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Dilliprasad%20K.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Security',
        team: "",
        department: 'Logistics',
    },
    {
        id: 73,
        parentId: 66,
        name: 'Govinda Sharma',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Govinda_Sharma_J.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Security',
        team: "",
        department: 'Logistics',
    },
    {
        id: 74,
        parentId: 67,
        name: 'Venkatesh',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Venkatesan_M.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Driveway Salesman',
        team: "",
        department: 'Logistics',
    },
    {
        id: 75,
        parentId: 67,
        name: 'Dinesh',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Dinesh_D.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Driveway Salesman',
        team: "",
        department: 'Logistics',
    },
    {
        id: 76,
        parentId: 50,
        name: 'Swathi',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Swathi_R.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Sr.Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 77,
        parentId: 50,
        name: 'Gomathi',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Gomathi_B2.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 78,
        parentId: 50,
        name: 'Amudha',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 79,
        parentId: 12,
        name: 'Ajin',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Ajin.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 80,
        parentId: 12,
        name: 'Siva',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Siva_N.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 81,
        parentId: 12,
        name: 'Venkatesh',
        imageUrl: '',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 82,
        parentId: 12,
        name: 'Ezhilan ',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Ezhilan%20%20R.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Sr.Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 83,
        parentId: 12,
        name: 'Sundar S',
        imageUrl: '444',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 84,
        parentId: 12,
        name: 'Chandru',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: '',
        team: "",
        department: '',
    },
    {
        id: 85,
        parentId: 12,
        name: 'Sathish Kumar',
        imageUrl: '',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Enginner-FA Support',
        team: "",
        department: 'Application',
    },
    {
        id: 86,
        parentId: 12,
        name: 'Arul Selvan',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Arul_Selvan_A1.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Sr.Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 87,
        parentId: 14,
        name: 'Vivek Kumar',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Vivek_Kumar_.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Asst.Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 88,
        parentId: 14,
        name: 'Prabakaran',
        imageUrl: '',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Asst.General Manager',
        team: "",
        department: 'Sales',
    },
    {
        id: 89,
        parentId: 14,
        name: 'Punith',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: '',
        team: "",
        department: '',
    },
    {
        id: 90,
        parentId: 14,
        name: 'Gopal',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Automation Engineer ',
        team: "",
        department: 'Sales',
    },
    {
        id: 91,
        parentId: 14,
        name: 'Lakshmish',
        imageUrl: '444',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 92,
        parentId: 14,
        name: 'Abishek Kumar',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Abishek_Kumar.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 93,
        parentId: 14,
        name: 'Anish',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 94,
        parentId: 14,
        name: 'Manimaran',
        imageUrl: '444',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 95,
        parentId: 14,
        name: 'Nandha kumar',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/nandhakumar.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: '',
        team: "",
        department: '',
    },
    {
        id: 96,
        parentId: 15,
        team: "Branding Dept",
    }, {
        id: 97,
        parentId: 96,
        name: 'Ilakkiya',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Ilakkiya_S_-New.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Executive',
        team: "",
        department: 'INNO',
    },
    {
        id: 98,
        parentId: 96,
        name: 'Nagappan',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Nagappan%20J.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Technician',
        team: "",
        department: 'INNO',
    },
    {
        id: 99,
        parentId: 96,
        name: 'Kaviya R',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Technician',
        team: "",
        department: 'Service',
    },
    {
        id: 100,
        parentId: 96,
        name: 'Logeshwari',
        imageUrl: 'http://148.66.135.245:8080/ERP_COPY//includes/employee_image/Logeswari.jpg',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Jr.Executive',
        team: "",
        department: 'INNO',
    },
    {
        id: 101,
        parentId: 16,
        name: 'Navaneethan',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 102,
        parentId: 16,
        name: 'Venkat Subramanian',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 103,
        parentId: 16,
        name: 'Surya',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: '',
        team: "",
        department: '',
    },
    {
        id: 104,
        parentId: 16,
        name: 'Bharathiyar',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
    {
        id: 105,
        parentId: 16,
        name: 'Sriram',
        imageUrl: 'rrrr',
        phone: '562 - 251',
        email: 'Rathi@gmail.com',
        location: 'Chennai',
        positionName: 'Automation Engineer',
        team: "",
        department: 'Sales',
    },
];
export default employees;