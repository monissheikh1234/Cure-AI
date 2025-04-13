const mongoose = require("mongoose");
// const { faker } = require("@faker-js/faker");
const Patient = require("./models/patient.js"); // Import your model

    async function main() {
        await mongoose.connect('mongodb://localhost:27017/healthcaredata');
    }
    main()
        .then(()=>{
            console.log("Mongo Connection Successful")
            generatePatients();
        })
        .catch((err)=>{
            console.log(err)
        })

       let patientData = 
        [
            {
                "Patient": {
                    "Name": "Mrs. Michelle Jones",
                    "Age": 78,
                    "Gender": "Female",
                    "aadhar_id": 559899383467,
                    "email": "egarrison@gmail.com",
                    "password": "k8sbW%c&)s"
                },
                "Emergency_Contact": {
                    "name": "Sheena Roach",
                    "Relationship": "Spouse",
                    "Phone": "(434)478-6085"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "To Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 Sep 2023 to 01 May 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Newspaper Syrup",
                        "Period": "18 Jul 2024 to 19 Nov 2025"
                    },
                    {
                        "Name": "Democrat Syrup",
                        "Period": "30 May 2023 to 12 Apr 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "15 Jul 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "MRI",
                        "Date": "20 Jan 2025",
                        "Result": "Normal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "13 Sep 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "18 Oct 2023",
                        "doctor": "Kayla Weber",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "10 Dec 2023",
                        "doctor": "Patricia Gould",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "13 May 2024",
                        "doctor": "Paige Meyer",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Rodney Rasmussen",
                    "Age": 72,
                    "Gender": "Male",
                    "aadhar_id": 277994843246,
                    "email": "brianmiller@jackson.com",
                    "password": "*I0b9kPy#L"
                },
                "Emergency_Contact": {
                    "name": "Jeffrey Tapia",
                    "Relationship": "Sibling",
                    "Phone": "345.303.8097"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Travel Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "06 Jun 2024 to 23 Apr 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Sure Tablet",
                        "Frequency": "Once a day",
                        "Period": "10 Nov 2024 to 01 Dec 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Today Syrup",
                        "Period": "03 Nov 2024 to 21 Aug 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "26 Dec 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "24 Mar 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "06 Aug 2024",
                        "doctor": "Ruben Mccarthy",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Asthma",
                        "date": "24 Feb 2023",
                        "doctor": "Robyn Serrano",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "15 Sep 2023",
                        "doctor": "Daniel Lyons",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Clifford Stanton",
                    "Age": 69,
                    "Gender": "Male",
                    "aadhar_id": 370483138441,
                    "email": "robyn74@yahoo.com",
                    "password": "$X4J_tlYP0"
                },
                "Emergency_Contact": {
                    "name": "Scott Myers II",
                    "Relationship": "Friend",
                    "Phone": "+1-753-878-9462"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Loss Tablet",
                        "Frequency": "Once a day",
                        "Period": "09 Jul 2024 to 29 Dec 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "There Tablet",
                        "Frequency": "Twice a day",
                        "Period": "04 Sep 2023 to 27 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Spring Tablet",
                        "Frequency": "Twice a day",
                        "Period": "27 Sep 2024 to 10 May 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Drug Syrup",
                        "Period": "06 May 2024 to 09 Jun 2024"
                    },
                    {
                        "Name": "Mrs Syrup",
                        "Period": "18 Aug 2023 to 14 Sep 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "06 Oct 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "19 Jan 2025",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "13 May 2023",
                        "doctor": "Joseph Neal",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "23 Sep 2023",
                        "doctor": "Misty Smith",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "05 Oct 2023",
                        "doctor": "Calvin Baldwin",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Miss Taylor Wright PhD",
                    "Age": 28,
                    "Gender": "Female",
                    "aadhar_id": 610524661495,
                    "email": "thomassherry@patterson-carter.com",
                    "password": ")$9UjPFvW#"
                },
                "Emergency_Contact": {
                    "name": "Robert Sheppard",
                    "Relationship": "Parent",
                    "Phone": "517-415-9017x1865"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Information Tablet",
                        "Frequency": "Once a day",
                        "Period": "02 Dec 2023 to 26 Jun 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Fill Tablet",
                        "Frequency": "Once a day",
                        "Period": "06 Jan 2024 to 14 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Current Tablet",
                        "Frequency": "Once a day",
                        "Period": "23 May 2023 to 06 Sep 2023",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Behavior Syrup",
                        "Period": "15 Apr 2024 to 06 Jul 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "06 Nov 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "08 Apr 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "27 Mar 2024",
                        "doctor": "Wendy Williams",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Brandon Thomas",
                    "Age": 61,
                    "Gender": "Male",
                    "aadhar_id": 688751511905,
                    "email": "jose06@gmail.com",
                    "password": "VGvBJCs6+1"
                },
                "Emergency_Contact": {
                    "name": "Alicia Armstrong",
                    "Relationship": "Sibling",
                    "Phone": "+1-937-054-4907"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Note Tablet",
                        "Frequency": "Once a day",
                        "Period": "18 Nov 2024 to 09 Jan 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Window Tablet",
                        "Frequency": "Twice a day",
                        "Period": "11 Dec 2024 to 20 Feb 2026",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Southern Syrup",
                        "Period": "11 Aug 2023 to 28 Dec 2023"
                    },
                    {
                        "Name": "While Syrup",
                        "Period": "11 Feb 2024 to 10 Sep 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "01 Feb 2025",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "28 Jun 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "20 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "22 Mar 2023",
                        "doctor": "Brianna Moore",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Victor Long",
                    "Age": 20,
                    "Gender": "Female",
                    "aadhar_id": 826022218859,
                    "email": "brianwilkins@hotmail.com",
                    "password": "!E)Si1F$1v"
                },
                "Emergency_Contact": {
                    "name": "Eileen Williams",
                    "Relationship": "Parent",
                    "Phone": "(444)828-2230x6949"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Light Tablet",
                        "Frequency": "Once a day",
                        "Period": "29 Mar 2024 to 12 Dec 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Nor Tablet",
                        "Frequency": "Twice a day",
                        "Period": "23 Jan 2024 to 22 Feb 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Individual Syrup",
                        "Period": "25 Jun 2023 to 14 Dec 2025"
                    },
                    {
                        "Name": "Vote Syrup",
                        "Period": "28 Dec 2024 to 30 Jan 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "19 May 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "21 Mar 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "22 Jun 2023",
                        "doctor": "Douglas Newman",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "26 Sep 2024",
                        "doctor": "Angela Simon",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "24 Nov 2023",
                        "doctor": "Crystal Martinez",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Lauren Lee",
                    "Age": 19,
                    "Gender": "Male",
                    "aadhar_id": 533372576286,
                    "email": "sanchezadam@cooper-harris.info",
                    "password": "#1sZBZyHXl"
                },
                "Emergency_Contact": {
                    "name": "Ms. Emily Morgan",
                    "Relationship": "Parent",
                    "Phone": "694-614-9466"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Lead Tablet",
                        "Frequency": "Once a day",
                        "Period": "19 Nov 2024 to 13 Jan 2026",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Single Syrup",
                        "Period": "26 Mar 2023 to 26 May 2023"
                    },
                    {
                        "Name": "Democrat Syrup",
                        "Period": "25 Sep 2024 to 07 Mar 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "25 Mar 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "04 Jul 2024",
                        "doctor": "Eric Walker",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Alyssa Blair",
                    "Age": 78,
                    "Gender": "Female",
                    "aadhar_id": 395655833192,
                    "email": "vyoung@hotmail.com",
                    "password": "_J1GGmJH(H"
                },
                "Emergency_Contact": {
                    "name": "Leroy Campbell",
                    "Relationship": "Friend",
                    "Phone": "737-531-5815x79115"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Ready Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "22 Aug 2024 to 19 Feb 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Land Syrup",
                        "Period": "12 Apr 2023 to 03 Feb 2026"
                    },
                    {
                        "Name": "Instead Syrup",
                        "Period": "03 Feb 2025 to 20 Oct 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "18 Jan 2025",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "14 Sep 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "17 Jan 2025",
                        "doctor": "Lori Melton",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Dominique Ramirez",
                    "Age": 52,
                    "Gender": "Male",
                    "aadhar_id": 398640096075,
                    "email": "wkelly@jenkins.com",
                    "password": "H*C6oQAvXa"
                },
                "Emergency_Contact": {
                    "name": "Brandon Smith",
                    "Relationship": "Friend",
                    "Phone": "688-249-0757x503"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Republican Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "15 Apr 2024 to 03 Aug 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Camera Tablet",
                        "Frequency": "Once a day",
                        "Period": "05 Jan 2025 to 15 Feb 2026",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Window Syrup",
                        "Period": "04 Nov 2023 to 31 Mar 2024"
                    },
                    {
                        "Name": "Push Syrup",
                        "Period": "08 Apr 2024 to 03 Aug 2024"
                    },
                    {
                        "Name": "Door Syrup",
                        "Period": "21 Aug 2023 to 10 Apr 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "08 Sep 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "03 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "30 Jul 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "27 Sep 2024",
                        "doctor": "Troy Fox",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "04 Mar 2023",
                        "doctor": "Jeffrey Duncan",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "08 Oct 2023",
                        "doctor": "Jessica Gonzalez",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Megan Lucero",
                    "Age": 23,
                    "Gender": "Male",
                    "aadhar_id": 431989477516,
                    "email": "stephaniejones@rodriguez.biz",
                    "password": "N8H*jzjl+u"
                },
                "Emergency_Contact": {
                    "name": "Jonathan Beck",
                    "Relationship": "Parent",
                    "Phone": "(173)697-9170"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Production Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "24 Nov 2024 to 21 Jul 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Sense Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "23 Jul 2023 to 21 Jun 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Fear Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "31 Mar 2023 to 13 Dec 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Guy Syrup",
                        "Period": "22 Oct 2024 to 05 Feb 2025"
                    },
                    {
                        "Name": "Child Syrup",
                        "Period": "12 Nov 2024 to 18 Mar 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "19 Dec 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "12 Feb 2024",
                        "doctor": "Johnathan Manning",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Debra Parsons",
                    "Age": 68,
                    "Gender": "Male",
                    "aadhar_id": 815270432341,
                    "email": "amandamitchell@gmail.com",
                    "password": "&i06J6Wx5#"
                },
                "Emergency_Contact": {
                    "name": "Sara Lozano",
                    "Relationship": "Sibling",
                    "Phone": "3152800906"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Ten Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "15 Dec 2024 to 27 Jan 2026",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Man Tablet",
                        "Frequency": "Twice a day",
                        "Period": "13 May 2023 to 21 Oct 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Newspaper Tablet",
                        "Frequency": "Twice a day",
                        "Period": "16 Jun 2024 to 29 Oct 2024",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Should Syrup",
                        "Period": "04 Apr 2023 to 31 Jan 2024"
                    },
                    {
                        "Name": "Rate Syrup",
                        "Period": "06 Jan 2024 to 17 Apr 2025"
                    },
                    {
                        "Name": "Place Syrup",
                        "Period": "14 Jul 2023 to 18 Nov 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "08 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "05 Oct 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "31 May 2023",
                        "doctor": "Jeffery Hayes",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Heather Evans",
                    "Age": 77,
                    "Gender": "Female",
                    "aadhar_id": 855996493938,
                    "email": "jamesgilmore@gmail.com",
                    "password": "Id*7Cmvvv5"
                },
                "Emergency_Contact": {
                    "name": "Christine Arroyo",
                    "Relationship": "Friend",
                    "Phone": "468-673-5402"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Most Tablet",
                        "Frequency": "Once a day",
                        "Period": "25 Dec 2024 to 18 Jan 2026",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Gun Tablet",
                        "Frequency": "Twice a day",
                        "Period": "22 Oct 2024 to 08 Jan 2026",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Suggest Tablet",
                        "Frequency": "Once a day",
                        "Period": "09 Sep 2023 to 10 Aug 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Bring Syrup",
                        "Period": "29 May 2024 to 16 May 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "25 Dec 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "19 Oct 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "29 Nov 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "11 Oct 2023",
                        "doctor": "Eric Briggs",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Francis Moore",
                    "Age": 74,
                    "Gender": "Male",
                    "aadhar_id": 808801884624,
                    "email": "hhunter@anderson-anderson.biz",
                    "password": "ZF&7VXzcyW"
                },
                "Emergency_Contact": {
                    "name": "Kevin Huffman",
                    "Relationship": "Sibling",
                    "Phone": "560.010.3734x117"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Talk Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "29 Jun 2023 to 31 May 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Instead Tablet",
                        "Frequency": "Twice a day",
                        "Period": "05 Dec 2023 to 02 Aug 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Allow Syrup",
                        "Period": "02 Mar 2023 to 05 Aug 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "01 Jul 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "30 Nov 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "15 Sep 2023",
                        "doctor": "Mary Salas",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Courtney Lopez",
                    "Age": 46,
                    "Gender": "Male",
                    "aadhar_id": 422937264940,
                    "email": "calderonterri@hotmail.com",
                    "password": "^Q#ypSyrU5"
                },
                "Emergency_Contact": {
                    "name": "Angela Myers",
                    "Relationship": "Spouse",
                    "Phone": "119-588-7070x5805"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Price Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 Jul 2023 to 20 Jan 2026",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Western Tablet",
                        "Frequency": "Twice a day",
                        "Period": "29 Apr 2024 to 25 Nov 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Create Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "06 Mar 2024 to 01 Jul 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Tend Syrup",
                        "Period": "03 Jul 2024 to 11 Sep 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "06 Sep 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "08 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "25 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "16 May 2024",
                        "doctor": "Michael Brooks",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "10 Sep 2023",
                        "doctor": "Madison Vazquez",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Kevin Burns",
                    "Age": 66,
                    "Gender": "Male",
                    "aadhar_id": 713920246018,
                    "email": "porterolivia@hotmail.com",
                    "password": "L08l7DMy(c"
                },
                "Emergency_Contact": {
                    "name": "Kirsten Howard",
                    "Relationship": "Spouse",
                    "Phone": "001-587-073-4964x9628"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Home Tablet",
                        "Frequency": "Twice a day",
                        "Period": "10 Apr 2023 to 10 Jun 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Amount Syrup",
                        "Period": "05 Oct 2024 to 13 Jan 2026"
                    },
                    {
                        "Name": "What Syrup",
                        "Period": "26 Sep 2023 to 21 Feb 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "29 Mar 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "11 Jan 2025",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "09 Jan 2024",
                        "doctor": "Kara Ramirez",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Anita Eaton",
                    "Age": 30,
                    "Gender": "Male",
                    "aadhar_id": 915926811361,
                    "email": "elizabeth54@hotmail.com",
                    "password": "#^91AYRcwf"
                },
                "Emergency_Contact": {
                    "name": "Jeffrey Lee",
                    "Relationship": "Spouse",
                    "Phone": "738.280.5722x1756"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Woman Tablet",
                        "Frequency": "Once a day",
                        "Period": "27 Jan 2024 to 01 May 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Figure Syrup",
                        "Period": "18 Nov 2023 to 20 Jan 2025"
                    },
                    {
                        "Name": "Per Syrup",
                        "Period": "15 Jul 2023 to 02 Jul 2024"
                    },
                    {
                        "Name": "Might Syrup",
                        "Period": "01 Feb 2025 to 24 Feb 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "15 Sep 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "15 Jul 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "19 Jul 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "22 Nov 2024",
                        "doctor": "Timothy Garza",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "24 Dec 2023",
                        "doctor": "Brittney Long",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Asthma",
                        "date": "30 Jan 2024",
                        "doctor": "Jerry James",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Tami Price",
                    "Age": 37,
                    "Gender": "Male",
                    "aadhar_id": 260319319267,
                    "email": "stanleyhall@yahoo.com",
                    "password": "%k%66Ub&@p"
                },
                "Emergency_Contact": {
                    "name": "Mrs. Elizabeth Keith",
                    "Relationship": "Spouse",
                    "Phone": "+1-826-459-1257x49491"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Hear Tablet",
                        "Frequency": "Once a day",
                        "Period": "21 Oct 2024 to 26 Oct 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Foot Syrup",
                        "Period": "23 Sep 2023 to 17 Sep 2025"
                    },
                    {
                        "Name": "Open Syrup",
                        "Period": "24 Oct 2024 to 16 Apr 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "01 May 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "25 Jul 2023",
                        "doctor": "John Martinez",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "21 May 2024",
                        "doctor": "Rebekah Jones",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Haley Johnson",
                    "Age": 76,
                    "Gender": "Male",
                    "aadhar_id": 409767999415,
                    "email": "yyoung@yahoo.com",
                    "password": "#eGYu7xUZ6"
                },
                "Emergency_Contact": {
                    "name": "Kristina Smith",
                    "Relationship": "Parent",
                    "Phone": "001-034-039-2968x08107"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Fall Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "04 Mar 2023 to 05 May 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Suggest Tablet",
                        "Frequency": "Once a day",
                        "Period": "17 Mar 2024 to 19 Jul 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Family Syrup",
                        "Period": "26 Jan 2025 to 27 Feb 2025"
                    },
                    {
                        "Name": "Key Syrup",
                        "Period": "09 Nov 2023 to 22 Apr 2024"
                    },
                    {
                        "Name": "Budget Syrup",
                        "Period": "10 Feb 2025 to 22 Oct 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "23 Sep 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "02 Aug 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "17 Nov 2024",
                        "doctor": "Robert Smith",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "26 Jun 2023",
                        "doctor": "Gregory Diaz",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "08 Jul 2024",
                        "doctor": "Anna Lowe",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Antonio Lara",
                    "Age": 33,
                    "Gender": "Male",
                    "aadhar_id": 765593761757,
                    "email": "nicole87@garcia-carroll.com",
                    "password": "gATbNclG(4"
                },
                "Emergency_Contact": {
                    "name": "Dennis Schmidt",
                    "Relationship": "Sibling",
                    "Phone": "+1-894-585-5054x13474"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Energy Tablet",
                        "Frequency": "Twice a day",
                        "Period": "12 Dec 2024 to 10 Jul 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Close Tablet",
                        "Frequency": "Once a day",
                        "Period": "21 Dec 2024 to 25 Dec 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Yard Syrup",
                        "Period": "16 Feb 2024 to 17 Dec 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "18 Mar 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "01 Jun 2023",
                        "doctor": "Gabrielle Young",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Angel Burch",
                    "Age": 65,
                    "Gender": "Female",
                    "aadhar_id": 478875070966,
                    "email": "qthomas@riley-garcia.info",
                    "password": "%2lHG*awV5"
                },
                "Emergency_Contact": {
                    "name": "John Brown",
                    "Relationship": "Spouse",
                    "Phone": "(335)544-1811"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Many Tablet",
                        "Frequency": "Twice a day",
                        "Period": "11 May 2023 to 08 Jul 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Magazine Tablet",
                        "Frequency": "Once a day",
                        "Period": "04 Jun 2024 to 04 Aug 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Security Syrup",
                        "Period": "09 Nov 2023 to 05 Sep 2024"
                    },
                    {
                        "Name": "Information Syrup",
                        "Period": "03 May 2024 to 15 Jul 2025"
                    },
                    {
                        "Name": "Evening Syrup",
                        "Period": "09 Aug 2024 to 09 May 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "08 Apr 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "28 Mar 2024",
                        "doctor": "Brian Schwartz",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Asthma",
                        "date": "04 Oct 2023",
                        "doctor": "Ann Stuart",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Shannon Hardy",
                    "Age": 53,
                    "Gender": "Female",
                    "aadhar_id": 930272770503,
                    "email": "imendoza@evans.com",
                    "password": "nv2CqIyf_*"
                },
                "Emergency_Contact": {
                    "name": "Anthony Mcdonald MD",
                    "Relationship": "Friend",
                    "Phone": "001-177-603-1677x8638"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Down Tablet",
                        "Frequency": "Twice a day",
                        "Period": "17 Nov 2024 to 18 Dec 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Pressure Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 Oct 2024 to 25 Aug 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Style Syrup",
                        "Period": "25 Jul 2023 to 15 Jan 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "08 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "28 Mar 2024",
                        "doctor": "Jonathan Harris",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "16 Aug 2023",
                        "doctor": "Christy Frank",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "01 Sep 2024",
                        "doctor": "Kimberly Williams",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "William Harris",
                    "Age": 51,
                    "Gender": "Male",
                    "aadhar_id": 543293790535,
                    "email": "nichole19@gmail.com",
                    "password": "(QS$YEmfs0"
                },
                "Emergency_Contact": {
                    "name": "Dylan Shepherd",
                    "Relationship": "Friend",
                    "Phone": "433-570-0563x40446"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Sea Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "14 Aug 2024 to 09 May 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Across Tablet",
                        "Frequency": "Twice a day",
                        "Period": "30 Sep 2024 to 23 Jan 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Purpose Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "22 Oct 2023 to 26 Feb 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Range Syrup",
                        "Period": "12 Dec 2024 to 02 Jun 2025"
                    },
                    {
                        "Name": "Baby Syrup",
                        "Period": "25 Dec 2024 to 29 Sep 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "09 Dec 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "10 Oct 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "23 Jul 2024",
                        "doctor": "Thomas Mckay",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "14 Feb 2024",
                        "doctor": "Lauren Shaw",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Michael Mclaughlin",
                    "Age": 26,
                    "Gender": "Female",
                    "aadhar_id": 621663613246,
                    "email": "jillmcdonald@rodriguez-rush.com",
                    "password": "zX&8M^aw!T"
                },
                "Emergency_Contact": {
                    "name": "Christopher Hoover",
                    "Relationship": "Sibling",
                    "Phone": "992-584-7714x9029"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Owner Tablet",
                        "Frequency": "Twice a day",
                        "Period": "18 May 2023 to 28 Nov 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Find Tablet",
                        "Frequency": "Once a day",
                        "Period": "13 Aug 2023 to 04 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Occur Tablet",
                        "Frequency": "Once a day",
                        "Period": "28 Sep 2024 to 29 Dec 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Position Syrup",
                        "Period": "29 Jul 2024 to 03 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "10 May 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "09 Mar 2024",
                        "doctor": "Roger Goodman",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "05 Jan 2025",
                        "doctor": "Adam Rodriguez",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Asthma",
                        "date": "25 Jun 2024",
                        "doctor": "Kathleen Copeland",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Stephanie Landry",
                    "Age": 78,
                    "Gender": "Female",
                    "aadhar_id": 559934831018,
                    "email": "kayla93@gmail.com",
                    "password": "9mHyUCe(@t"
                },
                "Emergency_Contact": {
                    "name": "Kimberly Griffith",
                    "Relationship": "Sibling",
                    "Phone": "+1-630-450-7810"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Campaign Tablet",
                        "Frequency": "Once a day",
                        "Period": "16 May 2023 to 06 Feb 2026",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Rich Tablet",
                        "Frequency": "Once a day",
                        "Period": "08 Jun 2023 to 14 Mar 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "With Syrup",
                        "Period": "05 Dec 2024 to 28 Aug 2025"
                    },
                    {
                        "Name": "Down Syrup",
                        "Period": "27 Nov 2023 to 25 Nov 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "24 Oct 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "20 Dec 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "04 Dec 2024",
                        "doctor": "Charlotte Sutton",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Brian Ford",
                    "Age": 62,
                    "Gender": "Female",
                    "aadhar_id": 934515683949,
                    "email": "huntnicole@hotmail.com",
                    "password": "e9_(NC!%!P"
                },
                "Emergency_Contact": {
                    "name": "Roy Jackson",
                    "Relationship": "Spouse",
                    "Phone": "001-141-312-5248x73648"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Open Tablet",
                        "Frequency": "Twice a day",
                        "Period": "21 May 2023 to 03 Apr 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Like Syrup",
                        "Period": "07 Jul 2023 to 14 Sep 2024"
                    },
                    {
                        "Name": "Note Syrup",
                        "Period": "28 Feb 2024 to 31 Jul 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "16 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "14 Feb 2025",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "01 Mar 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "15 Jan 2024",
                        "doctor": "Stacy Berry",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "16 Jan 2025",
                        "doctor": "Angela Dean",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "William Brown",
                    "Age": 26,
                    "Gender": "Male",
                    "aadhar_id": 211518005842,
                    "email": "brownshane@hotmail.com",
                    "password": "zMQi^3Mo%k"
                },
                "Emergency_Contact": {
                    "name": "Cody Gilbert",
                    "Relationship": "Spouse",
                    "Phone": "526.547.5869x645"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Draw Tablet",
                        "Frequency": "Twice a day",
                        "Period": "21 Jun 2024 to 18 Jan 2026",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Middle Tablet",
                        "Frequency": "Twice a day",
                        "Period": "18 Nov 2024 to 15 Nov 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Become Tablet",
                        "Frequency": "Twice a day",
                        "Period": "16 May 2024 to 04 Feb 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Career Syrup",
                        "Period": "24 Apr 2023 to 13 Jan 2025"
                    },
                    {
                        "Name": "Central Syrup",
                        "Period": "02 Dec 2023 to 12 Dec 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "04 Aug 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "MRI",
                        "Date": "05 Nov 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "19 Nov 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "30 Oct 2023",
                        "doctor": "Rebecca Vaughn",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Karen Huffman",
                    "Age": 24,
                    "Gender": "Male",
                    "aadhar_id": 351900271481,
                    "email": "jonathanfox@yahoo.com",
                    "password": "oFSp2k+g6)"
                },
                "Emergency_Contact": {
                    "name": "Shannon Hunter",
                    "Relationship": "Parent",
                    "Phone": "136.142.2298x201"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Five Tablet",
                        "Frequency": "Twice a day",
                        "Period": "21 Mar 2024 to 05 May 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Bag Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "21 Oct 2023 to 21 Feb 2026",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Baby Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "10 Sep 2024 to 20 Oct 2024",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Grow Syrup",
                        "Period": "05 Feb 2024 to 09 Aug 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "17 Sep 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "31 Mar 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "26 Nov 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "07 May 2024",
                        "doctor": "Raymond Day",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "17 Mar 2024",
                        "doctor": "Heather Harris",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "30 Jul 2024",
                        "doctor": "Douglas Sanford",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jennifer Rice",
                    "Age": 48,
                    "Gender": "Female",
                    "aadhar_id": 985819636402,
                    "email": "tinabaxter@gmail.com",
                    "password": "@32&DzAsYg"
                },
                "Emergency_Contact": {
                    "name": "Anna Molina",
                    "Relationship": "Spouse",
                    "Phone": "(889)225-0055x0956"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Exactly Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "04 Jun 2024 to 15 May 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Later Tablet",
                        "Frequency": "Twice a day",
                        "Period": "03 Feb 2025 to 16 Feb 2026",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Family Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "16 Aug 2024 to 10 Sep 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Provide Syrup",
                        "Period": "21 Aug 2023 to 22 Dec 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "15 Mar 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "02 Jul 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "MRI",
                        "Date": "15 Sep 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "26 Jul 2023",
                        "doctor": "Jeremy Erickson",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "31 Oct 2024",
                        "doctor": "Ryan Novak",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Cheryl Flores",
                    "Age": 30,
                    "Gender": "Female",
                    "aadhar_id": 753593224127,
                    "email": "sherry77@burns-ramirez.biz",
                    "password": "NE^x2JqK9s"
                },
                "Emergency_Contact": {
                    "name": "Audrey Ramos",
                    "Relationship": "Sibling",
                    "Phone": "115.229.1027x1366"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Simple Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "21 Nov 2023 to 07 Jan 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Opportunity Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "10 Dec 2023 to 25 Jan 2026",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Them Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "17 Apr 2023 to 14 Feb 2026",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "List Syrup",
                        "Period": "23 Oct 2023 to 26 Jul 2024"
                    },
                    {
                        "Name": "Remain Syrup",
                        "Period": "18 May 2023 to 16 Sep 2024"
                    },
                    {
                        "Name": "Federal Syrup",
                        "Period": "11 Jan 2024 to 02 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "08 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "13 Mar 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "12 May 2023",
                        "doctor": "Lori Martinez",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "05 Apr 2023",
                        "doctor": "Allison Martinez",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Elizabeth Sparks",
                    "Age": 43,
                    "Gender": "Female",
                    "aadhar_id": 756076057251,
                    "email": "christopher10@williams.org",
                    "password": ")1NRu5SiyV"
                },
                "Emergency_Contact": {
                    "name": "Lisa Briggs",
                    "Relationship": "Friend",
                    "Phone": "6475688916"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Himself Tablet",
                        "Frequency": "Twice a day",
                        "Period": "10 Oct 2024 to 10 Jan 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Relate Tablet",
                        "Frequency": "Twice a day",
                        "Period": "04 May 2024 to 11 Sep 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Actually Tablet",
                        "Frequency": "Twice a day",
                        "Period": "04 Sep 2023 to 09 Feb 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Training Syrup",
                        "Period": "26 Jul 2023 to 08 Mar 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "09 Jan 2025",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "08 Jul 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "30 Mar 2024",
                        "doctor": "Regina Knox",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "29 Apr 2024",
                        "doctor": "Anna Lewis",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "05 May 2023",
                        "doctor": "Nathan Holland",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Hector Stewart",
                    "Age": 64,
                    "Gender": "Male",
                    "aadhar_id": 345487023932,
                    "email": "emiller@yahoo.com",
                    "password": "+9$KMX_Nod"
                },
                "Emergency_Contact": {
                    "name": "Debra Ellis",
                    "Relationship": "Sibling",
                    "Phone": "001-414-652-9755x7040"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Though Tablet",
                        "Frequency": "Once a day",
                        "Period": "28 Jun 2024 to 10 Aug 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Such Syrup",
                        "Period": "22 Jan 2025 to 19 Jun 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "20 Oct 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "20 Sep 2023",
                        "doctor": "Robert Harrison",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Asthma",
                        "date": "18 Dec 2023",
                        "doctor": "Dawn Bell",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "26 Jan 2025",
                        "doctor": "Jason Golden",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Leslie Cook",
                    "Age": 39,
                    "Gender": "Male",
                    "aadhar_id": 449546060374,
                    "email": "fbrooks@gmail.com",
                    "password": "X7RFjedL#l"
                },
                "Emergency_Contact": {
                    "name": "John Barron",
                    "Relationship": "Friend",
                    "Phone": "1745205995"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Method Tablet",
                        "Frequency": "Once a day",
                        "Period": "30 Jul 2023 to 04 Apr 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Movement Tablet",
                        "Frequency": "Twice a day",
                        "Period": "29 Jun 2023 to 17 Sep 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Apply Tablet",
                        "Frequency": "Twice a day",
                        "Period": "30 Jul 2023 to 13 May 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Television Syrup",
                        "Period": "04 Oct 2024 to 03 Jan 2026"
                    },
                    {
                        "Name": "Near Syrup",
                        "Period": "12 Sep 2023 to 15 Jun 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "12 May 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "26 Jun 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "28 Nov 2024",
                        "doctor": "Ashley Hunter",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Lori Martin",
                    "Age": 18,
                    "Gender": "Male",
                    "aadhar_id": 480840254456,
                    "email": "aaroncarter@yahoo.com",
                    "password": "!uphSdnZ4b"
                },
                "Emergency_Contact": {
                    "name": "Charles Melendez",
                    "Relationship": "Spouse",
                    "Phone": "+1-592-490-1549x417"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Similar Tablet",
                        "Frequency": "Twice a day",
                        "Period": "04 Feb 2024 to 27 Mar 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Those Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "11 Jul 2024 to 02 Mar 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Best Tablet",
                        "Frequency": "Once a day",
                        "Period": "03 Nov 2024 to 30 May 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Source Syrup",
                        "Period": "28 Mar 2023 to 27 Dec 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "06 Jan 2025",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "21 May 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "29 Sep 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "26 Sep 2023",
                        "doctor": "Jason Davis",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jennifer Fisher",
                    "Age": 57,
                    "Gender": "Male",
                    "aadhar_id": 410472557473,
                    "email": "victoria58@davis.com",
                    "password": ")JcplkTnb6"
                },
                "Emergency_Contact": {
                    "name": "Gabriel Roberts",
                    "Relationship": "Parent",
                    "Phone": "+1-670-296-8773x5591"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Trade Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "24 Sep 2024 to 14 Oct 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Huge Tablet",
                        "Frequency": "Once a day",
                        "Period": "31 May 2024 to 24 Nov 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Another Syrup",
                        "Period": "17 Jun 2023 to 19 Jan 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "07 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "17 Jan 2025",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "11 Sep 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "12 Aug 2024",
                        "doctor": "Amy Clark",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "10 Apr 2024",
                        "doctor": "Ian Osborn",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Yolanda Moore",
                    "Age": 30,
                    "Gender": "Female",
                    "aadhar_id": 274070804476,
                    "email": "justin83@hotmail.com",
                    "password": "Dm0^JlY^8$"
                },
                "Emergency_Contact": {
                    "name": "Kim Sampson",
                    "Relationship": "Sibling",
                    "Phone": "+1-514-836-8877x860"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Somebody Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 May 2023 to 14 Jun 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Exactly Tablet",
                        "Frequency": "Once a day",
                        "Period": "11 Mar 2023 to 03 May 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Sister Syrup",
                        "Period": "19 Oct 2023 to 08 Mar 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "23 Mar 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "31 May 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "28 May 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "15 Apr 2023",
                        "doctor": "Ryan Payne",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "30 Jul 2023",
                        "doctor": "April Bell",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Mrs. Amy Martinez",
                    "Age": 23,
                    "Gender": "Male",
                    "aadhar_id": 933579432015,
                    "email": "olsonrobert@gmail.com",
                    "password": "w60kZre6@5"
                },
                "Emergency_Contact": {
                    "name": "Laurie Brown",
                    "Relationship": "Parent",
                    "Phone": "+1-006-776-0789"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Market Tablet",
                        "Frequency": "Twice a day",
                        "Period": "07 Jul 2024 to 11 Dec 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Wind Tablet",
                        "Frequency": "Twice a day",
                        "Period": "05 Dec 2023 to 23 Dec 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Fund Syrup",
                        "Period": "04 Mar 2024 to 27 Dec 2025"
                    },
                    {
                        "Name": "Else Syrup",
                        "Period": "21 Sep 2024 to 05 May 2025"
                    },
                    {
                        "Name": "Face Syrup",
                        "Period": "11 Jun 2023 to 17 Jul 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "03 Jun 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "22 Dec 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "22 Sep 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "21 Jul 2024",
                        "doctor": "Joshua Rivas",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Mr. Christopher Adkins",
                    "Age": 77,
                    "Gender": "Female",
                    "aadhar_id": 775388132847,
                    "email": "qhanson@gmail.com",
                    "password": "@8G0ld&gnk"
                },
                "Emergency_Contact": {
                    "name": "Calvin Wu",
                    "Relationship": "Parent",
                    "Phone": "(749)434-8792x4003"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "No Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "10 Nov 2024 to 02 Mar 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Possible Tablet",
                        "Frequency": "Once a day",
                        "Period": "13 Dec 2024 to 21 Aug 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Of Syrup",
                        "Period": "09 May 2023 to 07 Sep 2025"
                    },
                    {
                        "Name": "Gas Syrup",
                        "Period": "25 Feb 2023 to 03 Oct 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "24 Apr 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "10 Oct 2023",
                        "doctor": "Julie Green",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "20 Jul 2024",
                        "doctor": "Danielle Howell",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Michael Guzman",
                    "Age": 74,
                    "Gender": "Female",
                    "aadhar_id": 154178323252,
                    "email": "lesterkaren@holmes.net",
                    "password": "s_^0^VKtWn"
                },
                "Emergency_Contact": {
                    "name": "Lauren Cox",
                    "Relationship": "Parent",
                    "Phone": "001-570-779-5387x18873"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Prevent Tablet",
                        "Frequency": "Once a day",
                        "Period": "14 Nov 2023 to 21 Jul 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Beautiful Syrup",
                        "Period": "19 Sep 2023 to 21 May 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "23 Dec 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "17 Jul 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "08 Apr 2024",
                        "doctor": "Michael Hodge",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "03 Feb 2024",
                        "doctor": "Frances Herrera",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Melissa Evans",
                    "Age": 41,
                    "Gender": "Male",
                    "aadhar_id": 357161718838,
                    "email": "sheltonrobin@anderson.com",
                    "password": "V41Y!kwa)$"
                },
                "Emergency_Contact": {
                    "name": "Holly Johnson",
                    "Relationship": "Parent",
                    "Phone": "(951)680-1825x086"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Join Tablet",
                        "Frequency": "Once a day",
                        "Period": "17 Mar 2023 to 05 Jul 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Long Tablet",
                        "Frequency": "Once a day",
                        "Period": "25 Oct 2023 to 16 Jun 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Western Syrup",
                        "Period": "07 Nov 2024 to 18 Sep 2025"
                    },
                    {
                        "Name": "First Syrup",
                        "Period": "05 Sep 2023 to 22 Oct 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "25 Sep 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "06 Oct 2024",
                        "doctor": "Natalie Dennis",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Asthma",
                        "date": "08 Jan 2024",
                        "doctor": "Kevin Thomas",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "24 Aug 2024",
                        "doctor": "Brandy Gould",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jaime Gonzales",
                    "Age": 20,
                    "Gender": "Female",
                    "aadhar_id": 182710398750,
                    "email": "joshuaprice@smith.com",
                    "password": "4mz^V!c+@_"
                },
                "Emergency_Contact": {
                    "name": "Chelsea Fry",
                    "Relationship": "Friend",
                    "Phone": "(676)048-5344"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Create Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "09 Nov 2023 to 20 Mar 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Win Tablet",
                        "Frequency": "Twice a day",
                        "Period": "13 Apr 2023 to 01 Aug 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Sport Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 May 2024 to 23 Jun 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Surface Syrup",
                        "Period": "22 Aug 2023 to 15 Oct 2025"
                    },
                    {
                        "Name": "Out Syrup",
                        "Period": "25 Sep 2023 to 19 May 2025"
                    },
                    {
                        "Name": "Perhaps Syrup",
                        "Period": "09 Jul 2024 to 04 Oct 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "03 Oct 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "09 Jul 2024",
                        "doctor": "Kimberly Oconnell",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Richard Foster",
                    "Age": 45,
                    "Gender": "Male",
                    "aadhar_id": 959955018827,
                    "email": "gtaylor@gmail.com",
                    "password": "wV6gGPNiT$"
                },
                "Emergency_Contact": {
                    "name": "Jesse Larson",
                    "Relationship": "Parent",
                    "Phone": "(328)060-7918x26936"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Today Tablet",
                        "Frequency": "Once a day",
                        "Period": "02 Oct 2023 to 31 Jul 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Where Syrup",
                        "Period": "07 Mar 2023 to 29 Jul 2024"
                    },
                    {
                        "Name": "Usually Syrup",
                        "Period": "18 May 2024 to 15 Sep 2025"
                    },
                    {
                        "Name": "Others Syrup",
                        "Period": "10 Mar 2024 to 16 May 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "02 Mar 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "31 Mar 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "17 Jan 2025",
                        "doctor": "Mary Martin",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "10 Dec 2024",
                        "doctor": "Megan Evans",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jason Fernandez",
                    "Age": 56,
                    "Gender": "Male",
                    "aadhar_id": 341386838039,
                    "email": "proberts@campbell.net",
                    "password": "GP3CnJdK_&"
                },
                "Emergency_Contact": {
                    "name": "Steven Krause",
                    "Relationship": "Spouse",
                    "Phone": "(060)528-5089x09601"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Like Tablet",
                        "Frequency": "Once a day",
                        "Period": "19 Apr 2023 to 25 Feb 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Sometimes Tablet",
                        "Frequency": "Once a day",
                        "Period": "24 Jan 2025 to 19 Sep 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Group Tablet",
                        "Frequency": "Once a day",
                        "Period": "06 Jan 2024 to 02 Jan 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Clearly Syrup",
                        "Period": "24 Jul 2023 to 24 Aug 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "14 Sep 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "25 Aug 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "16 Nov 2023",
                        "doctor": "Natasha Rogers",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "10 Jun 2024",
                        "doctor": "Stephanie Barr",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "22 Mar 2024",
                        "doctor": "Daniel Williams",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jennifer Fisher",
                    "Age": 30,
                    "Gender": "Male",
                    "aadhar_id": 652959910312,
                    "email": "edwardwilliams@campbell-torres.com",
                    "password": "(Z1^0FPff5"
                },
                "Emergency_Contact": {
                    "name": "Ricardo Lopez",
                    "Relationship": "Sibling",
                    "Phone": "(664)637-6416x60618"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Even Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Sep 2024 to 26 Sep 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Throughout Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "05 Aug 2023 to 07 Jul 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Necessary Tablet",
                        "Frequency": "Twice a day",
                        "Period": "13 Jan 2025 to 03 Apr 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Impact Syrup",
                        "Period": "09 Aug 2024 to 10 Jul 2025"
                    },
                    {
                        "Name": "Inside Syrup",
                        "Period": "15 Oct 2023 to 06 Aug 2025"
                    },
                    {
                        "Name": "Laugh Syrup",
                        "Period": "14 Oct 2023 to 22 Dec 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "04 Nov 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "02 Jun 2024",
                        "doctor": "Mr. Jerry Morrow",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "James Evans",
                    "Age": 31,
                    "Gender": "Female",
                    "aadhar_id": 624655718265,
                    "email": "loverachel@yahoo.com",
                    "password": "(0ShIjC#p$"
                },
                "Emergency_Contact": {
                    "name": "Michael Nguyen",
                    "Relationship": "Friend",
                    "Phone": "001-872-585-2936x5197"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Happy Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 Oct 2023 to 21 Feb 2026",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "North Syrup",
                        "Period": "30 Nov 2024 to 22 Sep 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "23 Mar 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "03 Oct 2024",
                        "doctor": "Jason Burns",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "22 Jan 2024",
                        "doctor": "Pamela Griffin",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "26 Nov 2023",
                        "doctor": "Alvin Bell",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Austin Mercer",
                    "Age": 51,
                    "Gender": "Male",
                    "aadhar_id": 744668667864,
                    "email": "dominguezmorgan@yahoo.com",
                    "password": "!#4csKIceN"
                },
                "Emergency_Contact": {
                    "name": "Timothy Romero",
                    "Relationship": "Spouse",
                    "Phone": "001-933-811-2099x60242"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Fear Tablet",
                        "Frequency": "Twice a day",
                        "Period": "09 Apr 2024 to 04 Oct 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Respond Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "08 Nov 2023 to 09 Jul 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Different Tablet",
                        "Frequency": "Once a day",
                        "Period": "10 Mar 2023 to 11 Mar 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Three Syrup",
                        "Period": "02 Feb 2025 to 26 Oct 2025"
                    },
                    {
                        "Name": "High Syrup",
                        "Period": "04 Mar 2023 to 11 Dec 2024"
                    },
                    {
                        "Name": "Seem Syrup",
                        "Period": "24 Mar 2023 to 16 Aug 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "09 Feb 2025",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "24 Aug 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "09 Feb 2024",
                        "doctor": "Jennifer Chen",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "08 Apr 2024",
                        "doctor": "Nancy Washington",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Michael Campbell",
                    "Age": 47,
                    "Gender": "Male",
                    "aadhar_id": 404594285216,
                    "email": "jwelch@young.com",
                    "password": "_5_HXIrz10"
                },
                "Emergency_Contact": {
                    "name": "Dakota Jefferson",
                    "Relationship": "Friend",
                    "Phone": "490-190-7361x63884"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Serious Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "22 Nov 2023 to 09 Sep 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Share Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "09 Feb 2024 to 22 Jul 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "How Tablet",
                        "Frequency": "Once a day",
                        "Period": "28 Jun 2023 to 21 Sep 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Boy Syrup",
                        "Period": "07 Oct 2024 to 20 Feb 2025"
                    },
                    {
                        "Name": "Player Syrup",
                        "Period": "28 Jan 2024 to 02 May 2024"
                    },
                    {
                        "Name": "Executive Syrup",
                        "Period": "15 Sep 2023 to 03 Apr 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "15 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "19 Aug 2024",
                        "doctor": "Madison Anderson",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "23 Dec 2023",
                        "doctor": "Hannah Miller",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "16 Sep 2024",
                        "doctor": "Stacey Henderson",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Amanda Robinson",
                    "Age": 48,
                    "Gender": "Female",
                    "aadhar_id": 169503774499,
                    "email": "jasontaylor@patterson-martin.net",
                    "password": "0mYNz&32!L"
                },
                "Emergency_Contact": {
                    "name": "Maria Cooley",
                    "Relationship": "Parent",
                    "Phone": "001-584-287-1732x631"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Yard Tablet",
                        "Frequency": "Once a day",
                        "Period": "09 Apr 2024 to 25 Jan 2026",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Room Tablet",
                        "Frequency": "Once a day",
                        "Period": "13 May 2023 to 14 Nov 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Risk Tablet",
                        "Frequency": "Once a day",
                        "Period": "18 Jun 2023 to 15 Sep 2023",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Loss Syrup",
                        "Period": "19 Nov 2024 to 19 May 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "02 Jun 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "03 Oct 2023",
                        "doctor": "Kathleen Weaver",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "15 Sep 2024",
                        "doctor": "Megan Andrews",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "12 Sep 2023",
                        "doctor": "Jennifer Jackson",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Donna Holder",
                    "Age": 33,
                    "Gender": "Male",
                    "aadhar_id": 640600204383,
                    "email": "joseph39@martinez-ross.org",
                    "password": "Y0iL*)q__6"
                },
                "Emergency_Contact": {
                    "name": "Amy Munoz",
                    "Relationship": "Parent",
                    "Phone": "780.438.6450x906"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Understand Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "18 Nov 2023 to 12 May 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Store Tablet",
                        "Frequency": "Once a day",
                        "Period": "15 Nov 2024 to 27 Dec 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Control Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "28 Sep 2024 to 02 Oct 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Use Syrup",
                        "Period": "23 Jan 2025 to 09 Oct 2025"
                    },
                    {
                        "Name": "Low Syrup",
                        "Period": "26 May 2024 to 29 May 2025"
                    },
                    {
                        "Name": "Gas Syrup",
                        "Period": "19 Mar 2023 to 24 Jan 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "12 Jun 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "01 Nov 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "12 Dec 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "16 Dec 2023",
                        "doctor": "Joyce Allen",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Bradley Ritter",
                    "Age": 41,
                    "Gender": "Female",
                    "aadhar_id": 539537472553,
                    "email": "velazquezmelissa@hotmail.com",
                    "password": "ujOtdw9D@9"
                },
                "Emergency_Contact": {
                    "name": "Linda Reynolds",
                    "Relationship": "Sibling",
                    "Phone": "050.859.1763x693"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Hear Tablet",
                        "Frequency": "Twice a day",
                        "Period": "20 Aug 2023 to 19 Jul 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Her Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 Jan 2025 to 15 Jun 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Bar Syrup",
                        "Period": "02 Jan 2025 to 23 Aug 2025"
                    },
                    {
                        "Name": "Have Syrup",
                        "Period": "02 May 2023 to 04 Mar 2025"
                    },
                    {
                        "Name": "Road Syrup",
                        "Period": "20 Dec 2024 to 29 Jun 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "04 Oct 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "29 Jan 2025",
                        "doctor": "Stephen Campbell",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "07 May 2023",
                        "doctor": "Zachary Villarreal",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Asthma",
                        "date": "11 Dec 2024",
                        "doctor": "Kenneth Patel",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Andrew Mata",
                    "Age": 80,
                    "Gender": "Female",
                    "aadhar_id": 927489385171,
                    "email": "austincline@mosley.com",
                    "password": "r#L^4Kx&%j"
                },
                "Emergency_Contact": {
                    "name": "Kerry Ramirez",
                    "Relationship": "Spouse",
                    "Phone": "(725)939-1112"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Appear Tablet",
                        "Frequency": "Once a day",
                        "Period": "30 Sep 2023 to 11 Apr 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Professor Tablet",
                        "Frequency": "Twice a day",
                        "Period": "13 Jul 2024 to 25 Aug 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Fear Tablet",
                        "Frequency": "Twice a day",
                        "Period": "03 Apr 2024 to 19 May 2024",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Experience Syrup",
                        "Period": "13 Jun 2024 to 24 Jul 2025"
                    },
                    {
                        "Name": "Black Syrup",
                        "Period": "04 Feb 2025 to 09 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "02 Sep 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "29 Feb 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "28 May 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "15 Feb 2024",
                        "doctor": "Samantha Watson",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "14 May 2024",
                        "doctor": "Ryan Turner",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Asthma",
                        "date": "18 May 2024",
                        "doctor": "Susan Gibson",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Courtney Stanley",
                    "Age": 80,
                    "Gender": "Male",
                    "aadhar_id": 239209378887,
                    "email": "melissaroberson@haynes.biz",
                    "password": "@2KVP$YVti"
                },
                "Emergency_Contact": {
                    "name": "Eric Wright",
                    "Relationship": "Sibling",
                    "Phone": "001-936-701-9206x0223"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Glass Tablet",
                        "Frequency": "Once a day",
                        "Period": "26 Oct 2023 to 26 Nov 2023",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Our Tablet",
                        "Frequency": "Once a day",
                        "Period": "31 Oct 2024 to 24 Feb 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Kid Syrup",
                        "Period": "18 Nov 2024 to 14 May 2025"
                    },
                    {
                        "Name": "Up Syrup",
                        "Period": "13 Feb 2024 to 15 Sep 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "15 Sep 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "28 Aug 2024",
                        "doctor": "Rebecca Lutz",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "14 Dec 2023",
                        "doctor": "Rebecca Barajas",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "04 Feb 2024",
                        "doctor": "Rachel Todd",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Sara Thompson",
                    "Age": 54,
                    "Gender": "Male",
                    "aadhar_id": 781265015261,
                    "email": "jennifer75@thompson-green.com",
                    "password": "$2QGJz1_b0"
                },
                "Emergency_Contact": {
                    "name": "Karen Carter",
                    "Relationship": "Friend",
                    "Phone": "(261)584-6837x36427"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Pick Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "16 Mar 2023 to 18 Jul 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Fine Syrup",
                        "Period": "10 Nov 2024 to 21 Apr 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "07 Jan 2025",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "21 Nov 2024",
                        "doctor": "Laura Russo",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Sheryl Williams",
                    "Age": 28,
                    "Gender": "Male",
                    "aadhar_id": 527508265000,
                    "email": "vincentvasquez@yahoo.com",
                    "password": "myI_upWG+5"
                },
                "Emergency_Contact": {
                    "name": "Michael Chan",
                    "Relationship": "Sibling",
                    "Phone": "393-592-5624"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Price Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "30 Mar 2023 to 09 Jul 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Wife Tablet",
                        "Frequency": "Twice a day",
                        "Period": "14 Apr 2023 to 25 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Choose Tablet",
                        "Frequency": "Once a day",
                        "Period": "16 Aug 2024 to 08 Sep 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Environmental Syrup",
                        "Period": "29 Dec 2023 to 18 Feb 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "03 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "11 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "14 Jan 2025",
                        "doctor": "Robert Benson",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "17 Dec 2023",
                        "doctor": "Joshua Phillips",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "27 Nov 2023",
                        "doctor": "Jennifer Hickman",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Michael Short",
                    "Age": 21,
                    "Gender": "Male",
                    "aadhar_id": 843554114538,
                    "email": "tiffany68@nichols-miller.biz",
                    "password": ")7LQJgik!*"
                },
                "Emergency_Contact": {
                    "name": "Christopher Williams",
                    "Relationship": "Sibling",
                    "Phone": "170-032-9842"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Truth Tablet",
                        "Frequency": "Twice a day",
                        "Period": "23 Jun 2024 to 22 Jan 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Physical Tablet",
                        "Frequency": "Twice a day",
                        "Period": "17 Apr 2024 to 18 Feb 2026",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Similar Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Sep 2024 to 14 Apr 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Relationship Syrup",
                        "Period": "09 Feb 2024 to 10 Mar 2025"
                    },
                    {
                        "Name": "Physical Syrup",
                        "Period": "23 May 2023 to 26 May 2024"
                    },
                    {
                        "Name": "Call Syrup",
                        "Period": "28 Sep 2023 to 03 May 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "04 May 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "06 Dec 2023",
                        "doctor": "Steven Williams",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "24 Feb 2023",
                        "doctor": "Roger Harris",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Madison Wong",
                    "Age": 66,
                    "Gender": "Female",
                    "aadhar_id": 220092689259,
                    "email": "jessicacraig@yahoo.com",
                    "password": "y6%UiCM$+j"
                },
                "Emergency_Contact": {
                    "name": "Ashley Mendez",
                    "Relationship": "Friend",
                    "Phone": "+1-721-210-3340x432"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Somebody Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "28 May 2023 to 08 Dec 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Series Syrup",
                        "Period": "27 Nov 2023 to 12 May 2024"
                    },
                    {
                        "Name": "Nature Syrup",
                        "Period": "27 Jul 2023 to 14 Sep 2023"
                    },
                    {
                        "Name": "Sell Syrup",
                        "Period": "29 May 2023 to 20 Sep 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "27 Oct 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "06 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "09 Jun 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "26 Dec 2023",
                        "doctor": "Denise Snow",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Stephanie Jones",
                    "Age": 47,
                    "Gender": "Male",
                    "aadhar_id": 243861071434,
                    "email": "michele21@warren-martin.com",
                    "password": "$5)Ff@el25"
                },
                "Emergency_Contact": {
                    "name": "Laura Ho",
                    "Relationship": "Spouse",
                    "Phone": "448.224.4116x830"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Attorney Tablet",
                        "Frequency": "Twice a day",
                        "Period": "19 Jul 2023 to 09 Feb 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Mean Syrup",
                        "Period": "26 Jun 2024 to 26 Dec 2024"
                    },
                    {
                        "Name": "Center Syrup",
                        "Period": "01 Jun 2024 to 26 Dec 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "13 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "27 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "23 May 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "12 Feb 2025",
                        "doctor": "Jennifer Smith",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "09 Mar 2024",
                        "doctor": "Michelle Collins",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Sara Davis",
                    "Age": 75,
                    "Gender": "Male",
                    "aadhar_id": 182431820684,
                    "email": "noahjacobs@caldwell.org",
                    "password": "N+2N%nac@Z"
                },
                "Emergency_Contact": {
                    "name": "David Anderson",
                    "Relationship": "Friend",
                    "Phone": "001-372-124-2198x54136"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Use Tablet",
                        "Frequency": "Twice a day",
                        "Period": "01 Nov 2024 to 24 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Indeed Tablet",
                        "Frequency": "Once a day",
                        "Period": "15 Mar 2023 to 31 Jul 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "More Syrup",
                        "Period": "23 Mar 2024 to 23 Feb 2025"
                    },
                    {
                        "Name": "Will Syrup",
                        "Period": "17 Jun 2023 to 20 May 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "03 Dec 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "12 Dec 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "12 Apr 2024",
                        "doctor": "Maria Scott",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "17 Apr 2024",
                        "doctor": "Martha Douglas",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "27 Jan 2025",
                        "doctor": "Kathleen Schneider",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Zachary Murphy",
                    "Age": 19,
                    "Gender": "Female",
                    "aadhar_id": 470842637916,
                    "email": "tiffany82@franklin.biz",
                    "password": "#3PoXu4H*c"
                },
                "Emergency_Contact": {
                    "name": "James Hall",
                    "Relationship": "Spouse",
                    "Phone": "975-442-1523x1100"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Seven Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "31 Jan 2025 to 20 Mar 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Life Syrup",
                        "Period": "21 Sep 2024 to 06 May 2025"
                    },
                    {
                        "Name": "Study Syrup",
                        "Period": "14 Apr 2024 to 28 Jun 2024"
                    },
                    {
                        "Name": "Step Syrup",
                        "Period": "17 Jul 2024 to 06 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "21 Jan 2025",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "19 Oct 2023",
                        "doctor": "Kelly Campbell DDS",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "John Knapp",
                    "Age": 72,
                    "Gender": "Male",
                    "aadhar_id": 873052081366,
                    "email": "marcusvaughn@wilson-moreno.org",
                    "password": "PQ0SFrEt2%"
                },
                "Emergency_Contact": {
                    "name": "Kelsey Williamson",
                    "Relationship": "Spouse",
                    "Phone": "0885326233"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Woman Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "29 May 2024 to 18 Sep 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Quickly Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "23 Jan 2025 to 31 Aug 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Poor Syrup",
                        "Period": "28 Nov 2024 to 14 Oct 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "08 Mar 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "23 Mar 2024",
                        "doctor": "Mr. Benjamin Jones",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "10 Apr 2023",
                        "doctor": "Cory Taylor",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Kristina Barrett",
                    "Age": 39,
                    "Gender": "Female",
                    "aadhar_id": 221094426179,
                    "email": "jsutton@yahoo.com",
                    "password": "tEa!+5hlU!"
                },
                "Emergency_Contact": {
                    "name": "Sydney Curtis",
                    "Relationship": "Spouse",
                    "Phone": "8593757708"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Hospital Tablet",
                        "Frequency": "Twice a day",
                        "Period": "03 Jan 2024 to 27 Apr 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Either Tablet",
                        "Frequency": "Twice a day",
                        "Period": "13 Feb 2024 to 16 Dec 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Cold Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "29 Aug 2023 to 20 Jan 2026",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Top Syrup",
                        "Period": "19 Sep 2024 to 25 Apr 2025"
                    },
                    {
                        "Name": "Drive Syrup",
                        "Period": "21 Apr 2023 to 04 Dec 2024"
                    },
                    {
                        "Name": "Culture Syrup",
                        "Period": "01 Feb 2025 to 28 Dec 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "05 Jan 2025",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "10 Nov 2023",
                        "doctor": "Sierra Brown",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "20 Aug 2023",
                        "doctor": "John Smith",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Lindsey Ayers",
                    "Age": 39,
                    "Gender": "Male",
                    "aadhar_id": 530816495324,
                    "email": "adammedina@miller.com",
                    "password": "y*n47WFIfl"
                },
                "Emergency_Contact": {
                    "name": "Jeffrey Floyd",
                    "Relationship": "Friend",
                    "Phone": "(610)260-0665"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Word Tablet",
                        "Frequency": "Once a day",
                        "Period": "10 Nov 2023 to 05 Jan 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Take Tablet",
                        "Frequency": "Once a day",
                        "Period": "22 Mar 2023 to 01 Dec 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Through Syrup",
                        "Period": "26 May 2023 to 08 Nov 2025"
                    },
                    {
                        "Name": "Project Syrup",
                        "Period": "13 Dec 2024 to 03 Oct 2025"
                    },
                    {
                        "Name": "Arm Syrup",
                        "Period": "09 Jul 2023 to 23 Jul 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "22 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "27 May 2024",
                        "doctor": "Ryan Ellis",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "John Banks",
                    "Age": 26,
                    "Gender": "Male",
                    "aadhar_id": 886597815957,
                    "email": "fmaldonado@carr-kirk.com",
                    "password": "Z9Gexvz$^g"
                },
                "Emergency_Contact": {
                    "name": "Dr. Cynthia Stone",
                    "Relationship": "Sibling",
                    "Phone": "001-948-207-8121"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Throughout Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "18 Mar 2023 to 14 Sep 2023",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Store Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "14 Mar 2023 to 22 Sep 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Across Syrup",
                        "Period": "01 Jun 2024 to 14 Jul 2025"
                    },
                    {
                        "Name": "Base Syrup",
                        "Period": "12 May 2024 to 01 Nov 2024"
                    },
                    {
                        "Name": "Night Syrup",
                        "Period": "06 Apr 2024 to 16 Feb 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "11 Feb 2025",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "25 Dec 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "24 Sep 2023",
                        "doctor": "Nicholas Ingram",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Douglas Michael",
                    "Age": 56,
                    "Gender": "Male",
                    "aadhar_id": 624511814044,
                    "email": "hfischer@bennett-wilson.com",
                    "password": "2*0JRVz5&o"
                },
                "Emergency_Contact": {
                    "name": "Christine Barton",
                    "Relationship": "Friend",
                    "Phone": "001-137-076-0446x1326"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Mouth Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "12 Feb 2024 to 26 May 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Than Syrup",
                        "Period": "25 Sep 2024 to 11 Jun 2025"
                    },
                    {
                        "Name": "Sit Syrup",
                        "Period": "03 Feb 2025 to 16 Feb 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "11 Dec 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "23 Jul 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "13 Jan 2025",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "30 Aug 2023",
                        "doctor": "Dominique Coleman",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "12 Oct 2024",
                        "doctor": "Carrie Fowler",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jacob Hill",
                    "Age": 22,
                    "Gender": "Male",
                    "aadhar_id": 225236761682,
                    "email": "jennifer03@jordan-jones.com",
                    "password": ")5jUwkwp8b"
                },
                "Emergency_Contact": {
                    "name": "Bryan Young",
                    "Relationship": "Sibling",
                    "Phone": "(861)671-7281x8597"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Dog Tablet",
                        "Frequency": "Twice a day",
                        "Period": "21 Aug 2024 to 24 Dec 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Onto Tablet",
                        "Frequency": "Once a day",
                        "Period": "09 Aug 2023 to 19 Jan 2026",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Front Tablet",
                        "Frequency": "Twice a day",
                        "Period": "06 Jan 2024 to 24 Jan 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "At Syrup",
                        "Period": "31 Jan 2024 to 06 Feb 2024"
                    },
                    {
                        "Name": "Series Syrup",
                        "Period": "10 May 2024 to 01 Mar 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "12 Jun 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "11 Apr 2024",
                        "doctor": "Lindsey Gordon",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "13 Mar 2023",
                        "doctor": "Thomas Lutz",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "01 Aug 2023",
                        "doctor": "Monica Howard",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Christopher Gonzales",
                    "Age": 66,
                    "Gender": "Male",
                    "aadhar_id": 606890016330,
                    "email": "candacemcconnell@collins.com",
                    "password": "M$J37P&i1_"
                },
                "Emergency_Contact": {
                    "name": "Katie Willis",
                    "Relationship": "Parent",
                    "Phone": "(938)978-9561"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Never Tablet",
                        "Frequency": "Once a day",
                        "Period": "25 Jul 2023 to 07 Mar 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "South Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "11 Dec 2024 to 09 Sep 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Treat Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "04 Feb 2024 to 16 Nov 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Full Syrup",
                        "Period": "06 Jun 2024 to 22 Jan 2025"
                    },
                    {
                        "Name": "Remain Syrup",
                        "Period": "16 May 2023 to 23 Nov 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "16 Nov 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "22 Sep 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "09 Sep 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "17 Sep 2023",
                        "doctor": "Alexander Scott",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Brandon Fitzpatrick",
                    "Age": 50,
                    "Gender": "Female",
                    "aadhar_id": 343917126089,
                    "email": "carolinewoods@griffin.com",
                    "password": "b3AW%vzx$T"
                },
                "Emergency_Contact": {
                    "name": "William Ward",
                    "Relationship": "Friend",
                    "Phone": "656.170.6655x02431"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Wrong Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "26 Nov 2023 to 22 Jul 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "South Tablet",
                        "Frequency": "Once a day",
                        "Period": "27 Aug 2024 to 31 Oct 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Event Syrup",
                        "Period": "03 Dec 2023 to 30 Sep 2025"
                    },
                    {
                        "Name": "Career Syrup",
                        "Period": "08 May 2024 to 11 Sep 2025"
                    },
                    {
                        "Name": "College Syrup",
                        "Period": "30 Sep 2024 to 08 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "06 Apr 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "30 Jan 2024",
                        "doctor": "Daniel Garcia",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "06 Aug 2023",
                        "doctor": "Tanya Cortez",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Asthma",
                        "date": "21 Jun 2023",
                        "doctor": "Kevin Blake",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Alejandro Cole",
                    "Age": 45,
                    "Gender": "Female",
                    "aadhar_id": 469608857625,
                    "email": "simpsoncody@bauer.com",
                    "password": "Q%K4nFNx&7"
                },
                "Emergency_Contact": {
                    "name": "Sarah Brady",
                    "Relationship": "Sibling",
                    "Phone": "908-169-5079x920"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Fill Tablet",
                        "Frequency": "Once a day",
                        "Period": "10 Jan 2025 to 17 Mar 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Minute Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "17 Oct 2023 to 22 Oct 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Together Tablet",
                        "Frequency": "Twice a day",
                        "Period": "26 May 2023 to 10 Jan 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Can Syrup",
                        "Period": "09 Dec 2024 to 15 Jan 2026"
                    },
                    {
                        "Name": "Computer Syrup",
                        "Period": "27 Dec 2024 to 27 Dec 2024"
                    },
                    {
                        "Name": "Stop Syrup",
                        "Period": "21 Mar 2023 to 18 Mar 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "27 Jan 2025",
                        "Result": "Normal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "02 Apr 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "28 Jun 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "21 Jun 2024",
                        "doctor": "Judith Lambert",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "08 Dec 2024",
                        "doctor": "Linda Ward",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "30 Mar 2023",
                        "doctor": "Russell Mcmahon",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Thomas Beck",
                    "Age": 39,
                    "Gender": "Male",
                    "aadhar_id": 479102461493,
                    "email": "william47@smith.com",
                    "password": "!3Q@Rij_J#"
                },
                "Emergency_Contact": {
                    "name": "Melanie Farley",
                    "Relationship": "Friend",
                    "Phone": "780.156.5456x78485"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Be Tablet",
                        "Frequency": "Twice a day",
                        "Period": "24 Jan 2024 to 23 Mar 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Various Syrup",
                        "Period": "11 Mar 2024 to 31 Jan 2026"
                    },
                    {
                        "Name": "Nearly Syrup",
                        "Period": "10 Nov 2024 to 12 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "08 Jul 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "16 Mar 2023",
                        "doctor": "Heather White",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Colton Huerta",
                    "Age": 47,
                    "Gender": "Male",
                    "aadhar_id": 920936675109,
                    "email": "michele50@yahoo.com",
                    "password": "_5CPGz)J3F"
                },
                "Emergency_Contact": {
                    "name": "Virginia Johnson",
                    "Relationship": "Spouse",
                    "Phone": "428-769-9463"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Serious Tablet",
                        "Frequency": "Twice a day",
                        "Period": "28 Sep 2024 to 26 Dec 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "When Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "25 Feb 2024 to 05 Jul 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Buy Tablet",
                        "Frequency": "Twice a day",
                        "Period": "09 Apr 2023 to 25 Jan 2024",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Best Syrup",
                        "Period": "18 Aug 2024 to 13 Dec 2024"
                    },
                    {
                        "Name": "Newspaper Syrup",
                        "Period": "12 Oct 2024 to 14 Jan 2026"
                    },
                    {
                        "Name": "Speech Syrup",
                        "Period": "10 Jul 2024 to 07 Oct 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "01 Jul 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "16 Feb 2025",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "29 Mar 2023",
                        "doctor": "Maria Sims",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Diabetes",
                        "date": "11 Sep 2023",
                        "doctor": "Amber Stewart",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jennifer Madden",
                    "Age": 29,
                    "Gender": "Female",
                    "aadhar_id": 621207146247,
                    "email": "staceyrobinson@valdez.com",
                    "password": "XO2yc5Irw$"
                },
                "Emergency_Contact": {
                    "name": "Patrick Martin",
                    "Relationship": "Spouse",
                    "Phone": "080.971.1886"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Minute Tablet",
                        "Frequency": "Twice a day",
                        "Period": "08 May 2023 to 09 Sep 2023",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Piece Syrup",
                        "Period": "17 Jan 2024 to 03 Apr 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "26 May 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "01 Jan 2025",
                        "doctor": "Mary Holmes",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "21 Nov 2023",
                        "doctor": "Nicole Smith",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "20 Dec 2023",
                        "doctor": "Dr. Robert Steele",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Sergio Hodge",
                    "Age": 65,
                    "Gender": "Male",
                    "aadhar_id": 311701817916,
                    "email": "oliviablake@ross.net",
                    "password": "$2Z8rhjW1D"
                },
                "Emergency_Contact": {
                    "name": "Karen Frank",
                    "Relationship": "Parent",
                    "Phone": "+1-471-960-5455x0839"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Discussion Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Aug 2024 to 12 Feb 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Director Tablet",
                        "Frequency": "Twice a day",
                        "Period": "04 Jan 2024 to 23 Sep 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Think Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "21 Feb 2024 to 22 Aug 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Some Syrup",
                        "Period": "13 Apr 2023 to 11 Jun 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "01 Jul 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "05 Nov 2023",
                        "doctor": "Charles Wang",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Patrick Simmons",
                    "Age": 72,
                    "Gender": "Male",
                    "aadhar_id": 653669037607,
                    "email": "smithhannah@wilson.com",
                    "password": "o4IORPJ6%g"
                },
                "Emergency_Contact": {
                    "name": "Stuart Washington",
                    "Relationship": "Spouse",
                    "Phone": "(556)986-2145x1919"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Source Tablet",
                        "Frequency": "Once a day",
                        "Period": "06 Sep 2024 to 28 Nov 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Study Syrup",
                        "Period": "04 May 2024 to 12 May 2025"
                    },
                    {
                        "Name": "Part Syrup",
                        "Period": "07 Jul 2024 to 06 Feb 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "18 Apr 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "26 Nov 2024",
                        "doctor": "Deborah Barron",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Asthma",
                        "date": "14 Jan 2024",
                        "doctor": "Terry Bennett",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "29 Dec 2023",
                        "doctor": "Cristina Smith",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Charles Wood",
                    "Age": 49,
                    "Gender": "Female",
                    "aadhar_id": 284268779528,
                    "email": "michelle08@miller-hawkins.org",
                    "password": "#^+tBbUx6v"
                },
                "Emergency_Contact": {
                    "name": "Eric Irwin",
                    "Relationship": "Parent",
                    "Phone": "(288)262-4072x0511"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Too Tablet",
                        "Frequency": "Once a day",
                        "Period": "07 Dec 2023 to 29 Oct 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Piece Syrup",
                        "Period": "06 Dec 2024 to 27 Jun 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "01 Dec 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "15 Feb 2025",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "17 Sep 2023",
                        "doctor": "Brian Calhoun",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Marie Morris",
                    "Age": 20,
                    "Gender": "Male",
                    "aadhar_id": 276160408850,
                    "email": "smithdavid@gmail.com",
                    "password": "do3o59Uc&*"
                },
                "Emergency_Contact": {
                    "name": "Joseph Baker",
                    "Relationship": "Parent",
                    "Phone": "1455642447"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Across Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "28 Sep 2023 to 07 Mar 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Bad Syrup",
                        "Period": "18 Nov 2023 to 17 Oct 2024"
                    },
                    {
                        "Name": "Field Syrup",
                        "Period": "02 Apr 2023 to 16 Feb 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "14 Oct 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "26 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "28 Apr 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "10 Nov 2024",
                        "doctor": "Thomas Kelley",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Mr. Clinton Sanchez",
                    "Age": 68,
                    "Gender": "Male",
                    "aadhar_id": 825173835053,
                    "email": "alyssaalexander@gmail.com",
                    "password": "wj@(9Mcq)&"
                },
                "Emergency_Contact": {
                    "name": "Dana Malone",
                    "Relationship": "Friend",
                    "Phone": "(100)716-3139x411"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Realize Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "31 Dec 2024 to 29 Jul 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Address Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Nov 2023 to 30 Dec 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Hour Tablet",
                        "Frequency": "Once a day",
                        "Period": "13 Mar 2024 to 24 Mar 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Industry Syrup",
                        "Period": "16 Mar 2023 to 17 Jul 2024"
                    },
                    {
                        "Name": "World Syrup",
                        "Period": "06 Sep 2023 to 26 Apr 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "08 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "15 Oct 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "17 Sep 2023",
                        "doctor": "Melissa Fritz DDS",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Richard Deleon",
                    "Age": 36,
                    "Gender": "Male",
                    "aadhar_id": 114881300068,
                    "email": "william35@gmail.com",
                    "password": "(RMTjrcG$3"
                },
                "Emergency_Contact": {
                    "name": "Gail Goodman",
                    "Relationship": "Friend",
                    "Phone": "001-514-752-2078x612"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Save Tablet",
                        "Frequency": "Once a day",
                        "Period": "28 May 2024 to 10 Nov 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Good Tablet",
                        "Frequency": "Twice a day",
                        "Period": "02 Dec 2024 to 21 Nov 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Subject Tablet",
                        "Frequency": "Twice a day",
                        "Period": "16 May 2024 to 21 Jan 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "College Syrup",
                        "Period": "14 Jun 2023 to 04 Sep 2023"
                    },
                    {
                        "Name": "Social Syrup",
                        "Period": "20 May 2024 to 13 May 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "19 Sep 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "16 Apr 2024",
                        "doctor": "Thomas Turner",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Craig Gray",
                    "Age": 28,
                    "Gender": "Male",
                    "aadhar_id": 700238346167,
                    "email": "cookkaren@gmail.com",
                    "password": "^w4hQKlz6R"
                },
                "Emergency_Contact": {
                    "name": "Heidi Richardson",
                    "Relationship": "Sibling",
                    "Phone": "883.899.3062x294"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Soon Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Jun 2023 to 10 Mar 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Then Syrup",
                        "Period": "17 Oct 2023 to 12 Dec 2024"
                    },
                    {
                        "Name": "Be Syrup",
                        "Period": "15 Aug 2024 to 10 Mar 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "06 Mar 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "18 Jan 2025",
                        "doctor": "Jeffery Wright",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Kim Castillo",
                    "Age": 45,
                    "Gender": "Female",
                    "aadhar_id": 561627343634,
                    "email": "edwinpollard@gmail.com",
                    "password": "^(jY4xOmQ8"
                },
                "Emergency_Contact": {
                    "name": "Samantha Martin",
                    "Relationship": "Parent",
                    "Phone": "+1-119-270-9556x32943"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Spring Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "29 Dec 2023 to 17 May 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Fact Tablet",
                        "Frequency": "Twice a day",
                        "Period": "27 Nov 2023 to 05 Jun 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Especially Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Jan 2025 to 29 Jan 2026",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Research Syrup",
                        "Period": "13 Dec 2024 to 03 May 2025"
                    },
                    {
                        "Name": "Dinner Syrup",
                        "Period": "16 Aug 2024 to 29 Jan 2026"
                    },
                    {
                        "Name": "Chance Syrup",
                        "Period": "16 Sep 2024 to 12 Jul 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "21 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "17 Apr 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "17 Sep 2024",
                        "doctor": "Jamie Murphy",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Rick Mckee",
                    "Age": 40,
                    "Gender": "Female",
                    "aadhar_id": 740290604912,
                    "email": "ericayu@yahoo.com",
                    "password": "X65!ZDan_C"
                },
                "Emergency_Contact": {
                    "name": "Connie Wright",
                    "Relationship": "Spouse",
                    "Phone": "8891003910"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Would Tablet",
                        "Frequency": "Once a day",
                        "Period": "26 Jan 2024 to 10 Jan 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Hour Tablet",
                        "Frequency": "Once a day",
                        "Period": "29 May 2023 to 27 Aug 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Institution Tablet",
                        "Frequency": "Twice a day",
                        "Period": "11 Apr 2024 to 11 Dec 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Market Syrup",
                        "Period": "08 May 2024 to 24 Jun 2025"
                    },
                    {
                        "Name": "Western Syrup",
                        "Period": "18 Apr 2023 to 12 Apr 2024"
                    },
                    {
                        "Name": "If Syrup",
                        "Period": "15 Jul 2023 to 17 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "16 Jul 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "06 Jul 2024",
                        "doctor": "Dennis Obrien",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Michael Vargas",
                    "Age": 51,
                    "Gender": "Male",
                    "aadhar_id": 339174124207,
                    "email": "valeriecole@hotmail.com",
                    "password": "z2o_2$CubL"
                },
                "Emergency_Contact": {
                    "name": "Jessica Parker",
                    "Relationship": "Sibling",
                    "Phone": "596-046-3869x448"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Coach Tablet",
                        "Frequency": "Once a day",
                        "Period": "07 Oct 2024 to 25 Apr 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Dark Syrup",
                        "Period": "20 Jan 2024 to 22 May 2025"
                    },
                    {
                        "Name": "Century Syrup",
                        "Period": "08 Nov 2024 to 25 Nov 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "26 Sep 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "22 Mar 2024",
                        "doctor": "Cynthia Beltran",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "28 Aug 2023",
                        "doctor": "Michael Scott",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "19 Dec 2024",
                        "doctor": "Troy Hicks",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Kenneth Jackson",
                    "Age": 66,
                    "Gender": "Female",
                    "aadhar_id": 240220741008,
                    "email": "bakerdouglas@rivera-griffin.biz",
                    "password": "v4LETIzI)R"
                },
                "Emergency_Contact": {
                    "name": "Brandon Higgins",
                    "Relationship": "Parent",
                    "Phone": "596-942-3385x038"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Theory Tablet",
                        "Frequency": "Once a day",
                        "Period": "03 Mar 2024 to 07 Apr 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Far Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "28 Aug 2024 to 05 Aug 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Share Syrup",
                        "Period": "18 Apr 2024 to 24 Feb 2025"
                    },
                    {
                        "Name": "Both Syrup",
                        "Period": "10 Apr 2024 to 04 Nov 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "11 Apr 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Arthritis",
                        "date": "01 Sep 2024",
                        "doctor": "Brian Allen",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Migraine",
                        "date": "20 Jan 2024",
                        "doctor": "Barbara Strickland",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jessica Foster",
                    "Age": 55,
                    "Gender": "Female",
                    "aadhar_id": 579897665502,
                    "email": "kathryn85@davis-alvarez.com",
                    "password": "&vYp+1pGM5"
                },
                "Emergency_Contact": {
                    "name": "Christian Church",
                    "Relationship": "Spouse",
                    "Phone": "001-282-189-7082x408"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Cause Tablet",
                        "Frequency": "Twice a day",
                        "Period": "30 Apr 2024 to 02 Jan 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Sit Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "23 Jul 2023 to 20 Jul 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Mind Tablet",
                        "Frequency": "Twice a day",
                        "Period": "17 Jun 2024 to 20 May 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Subject Syrup",
                        "Period": "24 Oct 2024 to 12 Dec 2024"
                    },
                    {
                        "Name": "Upon Syrup",
                        "Period": "19 Feb 2024 to 18 Feb 2025"
                    },
                    {
                        "Name": "Near Syrup",
                        "Period": "12 Dec 2023 to 08 Feb 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "13 Mar 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "19 Jul 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "19 Jul 2024",
                        "doctor": "Danny Freeman",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "22 Mar 2024",
                        "doctor": "Jose Hernandez",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Monique Campbell",
                    "Age": 49,
                    "Gender": "Female",
                    "aadhar_id": 105722551022,
                    "email": "kerralexandria@simpson-cox.biz",
                    "password": "#4bABMwQ26"
                },
                "Emergency_Contact": {
                    "name": "Isaac Lin",
                    "Relationship": "Parent",
                    "Phone": "001-644-827-0746"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Family Tablet",
                        "Frequency": "Twice a day",
                        "Period": "30 Mar 2024 to 06 Sep 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Yourself Tablet",
                        "Frequency": "Once a day",
                        "Period": "09 Apr 2024 to 20 May 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Wonder Syrup",
                        "Period": "24 Nov 2024 to 08 Sep 2025"
                    },
                    {
                        "Name": "Create Syrup",
                        "Period": "01 Sep 2023 to 15 Jul 2025"
                    },
                    {
                        "Name": "Beautiful Syrup",
                        "Period": "23 Mar 2023 to 27 Aug 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "22 Jan 2025",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "23 Aug 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "06 Aug 2023",
                        "doctor": "David Tran",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Brian Stephens",
                    "Age": 62,
                    "Gender": "Male",
                    "aadhar_id": 107863333752,
                    "email": "zlawson@gmail.com",
                    "password": "d!*5S+MocZ"
                },
                "Emergency_Contact": {
                    "name": "James Sawyer",
                    "Relationship": "Parent",
                    "Phone": "937.030.5419x633"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Management Tablet",
                        "Frequency": "Twice a day",
                        "Period": "22 Nov 2023 to 15 Aug 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Resource Syrup",
                        "Period": "29 Oct 2024 to 01 Jun 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "13 Feb 2025",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "17 Dec 2023",
                        "doctor": "Cynthia Case",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Lauren Hart",
                    "Age": 69,
                    "Gender": "Male",
                    "aadhar_id": 105159401491,
                    "email": "nathan63@yahoo.com",
                    "password": "q0ZiVlz+*O"
                },
                "Emergency_Contact": {
                    "name": "Amy Cook",
                    "Relationship": "Spouse",
                    "Phone": "351.193.7276x760"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "A Tablet",
                        "Frequency": "Once a day",
                        "Period": "07 Jan 2025 to 05 Jun 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Position Tablet",
                        "Frequency": "Once a day",
                        "Period": "18 Aug 2023 to 21 Nov 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Modern Tablet",
                        "Frequency": "Once a day",
                        "Period": "19 Jan 2024 to 07 Jul 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Rise Syrup",
                        "Period": "17 Sep 2023 to 06 Nov 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "25 Aug 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "20 Oct 2024",
                        "doctor": "Barbara Patel",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "22 Aug 2023",
                        "doctor": "Joe Diaz",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "28 Oct 2024",
                        "doctor": "Dustin Fernandez",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Jason Gonzalez",
                    "Age": 19,
                    "Gender": "Male",
                    "aadhar_id": 194045848775,
                    "email": "emilywhite@henry.biz",
                    "password": "!JqvGxPGI0"
                },
                "Emergency_Contact": {
                    "name": "Yolanda Russell",
                    "Relationship": "Friend",
                    "Phone": "655-020-1258x58295"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Else Tablet",
                        "Frequency": "Twice a day",
                        "Period": "08 Jan 2024 to 25 Oct 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Film Syrup",
                        "Period": "28 Dec 2024 to 22 Dec 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "31 Jan 2025",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "11 Jan 2024",
                        "doctor": "Lauren Henson",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Asthma",
                        "date": "03 Jun 2024",
                        "doctor": "Rodney Hancock",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "04 Jun 2024",
                        "doctor": "Bonnie Taylor",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Cassandra Williams",
                    "Age": 69,
                    "Gender": "Male",
                    "aadhar_id": 489909483148,
                    "email": "browndaniel@barker.com",
                    "password": "tX1TnWgAL@"
                },
                "Emergency_Contact": {
                    "name": "Kevin Arnold",
                    "Relationship": "Sibling",
                    "Phone": "381.970.6241x55774"
                },
                "Medical_Information": {
                    "Blood_Group": "B-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Single Tablet",
                        "Frequency": "Twice a day",
                        "Period": "21 Sep 2024 to 30 Jun 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Somebody Tablet",
                        "Frequency": "Twice a day",
                        "Period": "11 Nov 2023 to 16 Mar 2024",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Type Syrup",
                        "Period": "24 Oct 2023 to 23 Dec 2023"
                    },
                    {
                        "Name": "Player Syrup",
                        "Period": "24 Jun 2023 to 29 Jun 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "28 Oct 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "11 May 2023",
                        "doctor": "Gary Baker",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Migraine",
                        "date": "31 Oct 2024",
                        "doctor": "Meagan Bryant",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Asthma",
                        "date": "19 May 2024",
                        "doctor": "Juan Williams",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Troy Snyder",
                    "Age": 26,
                    "Gender": "Female",
                    "aadhar_id": 241013552183,
                    "email": "carolquinn@garza.biz",
                    "password": "@t6RZj5*y5"
                },
                "Emergency_Contact": {
                    "name": "Rachel Ryan",
                    "Relationship": "Parent",
                    "Phone": "0164610273"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Seven Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "13 Dec 2024 to 15 Feb 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Loss Syrup",
                        "Period": "06 Dec 2024 to 18 Jan 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "27 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "02 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "07 Jul 2024",
                        "doctor": "Anita Gill",
                        "notes": "Further tests required"
                    },
                    {
                        "condition": "Migraine",
                        "date": "07 Feb 2025",
                        "doctor": "Scott Cruz",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Melissa Pope",
                    "Age": 27,
                    "Gender": "Female",
                    "aadhar_id": 780810193546,
                    "email": "alexis07@yahoo.com",
                    "password": "!6v_Le_Y%h"
                },
                "Emergency_Contact": {
                    "name": "Wesley Campos",
                    "Relationship": "Friend",
                    "Phone": "001-774-394-9825"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Those Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "18 Jul 2024 to 15 Jan 2026",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Training Syrup",
                        "Period": "09 Jul 2023 to 01 Feb 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "03 Dec 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "05 May 2024",
                        "doctor": "Laura Harding",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Hypertension",
                        "date": "24 Jun 2024",
                        "doctor": "Daniel Lopez",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Katherine Morrow",
                    "Age": 62,
                    "Gender": "Female",
                    "aadhar_id": 127219821824,
                    "email": "philipwarren@gmail.com",
                    "password": "XL3^o6Kjiz"
                },
                "Emergency_Contact": {
                    "name": "Dennis Smith",
                    "Relationship": "Parent",
                    "Phone": "781-014-6967"
                },
                "Medical_Information": {
                    "Blood_Group": "A-",
                    "Allergies": "Dust"
                },
                "Current_Medication": [
                    {
                        "Name": "Reason Tablet",
                        "Frequency": "Twice a day",
                        "Period": "24 Apr 2023 to 29 Oct 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Property Syrup",
                        "Period": "22 Aug 2024 to 18 Apr 2025"
                    },
                    {
                        "Name": "Company Syrup",
                        "Period": "06 Jun 2023 to 02 Jan 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "11 Dec 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "17 Aug 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "01 Apr 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "23 May 2023",
                        "doctor": "Rhonda Webb",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "10 Feb 2024",
                        "doctor": "Peter Oconnor",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "28 Jul 2024",
                        "doctor": "James Braun",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Shelley Grant",
                    "Age": 45,
                    "Gender": "Male",
                    "aadhar_id": 170627404937,
                    "email": "joanna18@gmail.com",
                    "password": "+68WP)SoAF"
                },
                "Emergency_Contact": {
                    "name": "Yolanda Hart",
                    "Relationship": "Friend",
                    "Phone": "(741)426-3420x371"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "None"
                },
                "Current_Medication": [
                    {
                        "Name": "Space Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "17 Jun 2023 to 03 Dec 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Serious Syrup",
                        "Period": "24 Feb 2024 to 06 Jul 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "13 Dec 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "29 Jul 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "22 Oct 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "28 Sep 2023",
                        "doctor": "Linda Ayers",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Nicole Hicks",
                    "Age": 77,
                    "Gender": "Male",
                    "aadhar_id": 807437584580,
                    "email": "marshallgeorge@yahoo.com",
                    "password": "&3JN(CVc+v"
                },
                "Emergency_Contact": {
                    "name": "Jessica Kelly",
                    "Relationship": "Spouse",
                    "Phone": "(673)838-1705x77691"
                },
                "Medical_Information": {
                    "Blood_Group": "A+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Difference Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "16 Jul 2023 to 29 Jan 2024",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Miss Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "07 Feb 2024 to 08 Aug 2024",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Fact Syrup",
                        "Period": "18 Feb 2025 to 14 Mar 2025"
                    },
                    {
                        "Name": "Book Syrup",
                        "Period": "05 Nov 2024 to 03 Dec 2025"
                    },
                    {
                        "Name": "Stand Syrup",
                        "Period": "29 Dec 2024 to 06 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "Blood Test",
                        "Date": "09 Oct 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "15 Jun 2023",
                        "doctor": "Natasha Holland",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Thomas Rios",
                    "Age": 24,
                    "Gender": "Female",
                    "aadhar_id": 642487869883,
                    "email": "wyattmartin@carroll.com",
                    "password": "_9FTXa*UCj"
                },
                "Emergency_Contact": {
                    "name": "Frank Davis",
                    "Relationship": "Spouse",
                    "Phone": "478.276.2749"
                },
                "Medical_Information": {
                    "Blood_Group": "AB-",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Interesting Tablet",
                        "Frequency": "Once a day",
                        "Period": "30 Nov 2024 to 13 Oct 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Attention Tablet",
                        "Frequency": "Twice a day",
                        "Period": "17 Sep 2024 to 01 Sep 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Stay Syrup",
                        "Period": "26 Jan 2024 to 12 Jan 2026"
                    },
                    {
                        "Name": "Check Syrup",
                        "Period": "06 Oct 2023 to 07 Dec 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "11 Jan 2025",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "17 Oct 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "09 Jan 2025",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Hypertension",
                        "date": "14 Jul 2023",
                        "doctor": "Sylvia Smith",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Brian Obrien",
                    "Age": 35,
                    "Gender": "Male",
                    "aadhar_id": 317261092387,
                    "email": "bensonbeverly@chandler.com",
                    "password": "V69W$HNjy*"
                },
                "Emergency_Contact": {
                    "name": "Rachel Woods",
                    "Relationship": "Spouse",
                    "Phone": "001-204-163-9430x712"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Win Tablet",
                        "Frequency": "Twice a day",
                        "Period": "05 Apr 2024 to 22 Aug 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Opportunity Syrup",
                        "Period": "29 Apr 2024 to 07 Dec 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "20 Mar 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "27 Sep 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "Blood Test",
                        "Date": "21 Mar 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "06 Apr 2023",
                        "doctor": "Christine Taylor",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Rebecca Trujillo",
                    "Age": 62,
                    "Gender": "Female",
                    "aadhar_id": 555532951949,
                    "email": "milescharles@sharp.info",
                    "password": "f0_CJU6d+X"
                },
                "Emergency_Contact": {
                    "name": "Daisy Estrada",
                    "Relationship": "Friend",
                    "Phone": "(031)002-0511x2363"
                },
                "Medical_Information": {
                    "Blood_Group": "AB+",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Agree Tablet",
                        "Frequency": "Twice a day",
                        "Period": "14 Dec 2024 to 23 Mar 2025",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Condition Syrup",
                        "Period": "26 Jul 2023 to 21 Dec 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "MRI",
                        "Date": "14 Jan 2025",
                        "Result": "Normal"
                    },
                    {
                        "Type": "MRI",
                        "Date": "28 Jun 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "20 Apr 2024",
                        "doctor": "Robert Taylor",
                        "notes": "Condition under control"
                    },
                    {
                        "condition": "Asthma",
                        "date": "01 Nov 2024",
                        "doctor": "Jonathan Gutierrez",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Lisa Johnson",
                    "Age": 71,
                    "Gender": "Female",
                    "aadhar_id": 216093960139,
                    "email": "diana22@gmail.com",
                    "password": "nz1EvrIQ@p"
                },
                "Emergency_Contact": {
                    "name": "Mrs. Monica Herrera",
                    "Relationship": "Friend",
                    "Phone": "001-509-951-5336x9805"
                },
                "Medical_Information": {
                    "Blood_Group": "O-",
                    "Allergies": "Penicillin"
                },
                "Current_Medication": [
                    {
                        "Name": "Everybody Tablet",
                        "Frequency": "Once a day",
                        "Period": "08 Nov 2024 to 21 Sep 2025",
                        "Instruction": "Take after meal"
                    },
                    {
                        "Name": "Seven Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "11 Feb 2025 to 13 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Project Tablet",
                        "Frequency": "Twice a day",
                        "Period": "03 Sep 2024 to 06 Jun 2025",
                        "Instruction": "Take before bed"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Say Syrup",
                        "Period": "04 Aug 2024 to 09 Jan 2026"
                    },
                    {
                        "Name": "Sport Syrup",
                        "Period": "19 Mar 2024 to 28 Jan 2026"
                    },
                    {
                        "Name": "Charge Syrup",
                        "Period": "26 Jan 2025 to 24 Aug 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "21 Dec 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "08 Apr 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "03 Apr 2024",
                        "doctor": "Joseph Fuller",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Ann Mitchell",
                    "Age": 44,
                    "Gender": "Female",
                    "aadhar_id": 971727187088,
                    "email": "feliciaortega@hotmail.com",
                    "password": "1(1PI1uMJj"
                },
                "Emergency_Contact": {
                    "name": "Nicholas Cox",
                    "Relationship": "Sibling",
                    "Phone": "911.437.0027x7665"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Peanuts"
                },
                "Current_Medication": [
                    {
                        "Name": "Current Tablet",
                        "Frequency": "Once a day",
                        "Period": "26 Feb 2024 to 17 Sep 2025",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Reduce Tablet",
                        "Frequency": "Once a day",
                        "Period": "10 Apr 2023 to 03 Jun 2025",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Little Syrup",
                        "Period": "23 Aug 2023 to 19 Aug 2024"
                    },
                    {
                        "Name": "Build Syrup",
                        "Period": "18 Nov 2024 to 08 Jan 2026"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "21 Feb 2025",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "04 Apr 2024",
                        "Result": "Abnormal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "28 Nov 2024",
                        "Result": "Abnormal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "01 Apr 2023",
                        "doctor": "Jacob Long",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "17 Feb 2025",
                        "doctor": "Miranda Patterson",
                        "notes": "Patient advised to continue medication"
                    },
                    {
                        "condition": "Arthritis",
                        "date": "22 Apr 2024",
                        "doctor": "Kimberly Riddle",
                        "notes": "Patient advised to continue medication"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Lisa Mosley",
                    "Age": 57,
                    "Gender": "Female",
                    "aadhar_id": 453256344833,
                    "email": "melissajohnson@yahoo.com",
                    "password": "^9LWemnKFC"
                },
                "Emergency_Contact": {
                    "name": "Cody Wall",
                    "Relationship": "Friend",
                    "Phone": "(650)802-3124x351"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Support Tablet",
                        "Frequency": "Twice a day",
                        "Period": "14 Apr 2023 to 10 Apr 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Eat Tablet",
                        "Frequency": "Twice a day",
                        "Period": "14 Apr 2024 to 21 Jul 2024",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Mind Tablet",
                        "Frequency": "Once a day",
                        "Period": "04 Mar 2023 to 04 Aug 2024",
                        "Instruction": "Take after meal"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Sense Syrup",
                        "Period": "07 Sep 2023 to 04 Dec 2023"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "20 Dec 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "CT Scan",
                        "Date": "12 Sep 2024",
                        "Result": "Normal"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Diabetes",
                        "date": "23 May 2023",
                        "doctor": "Julie Decker",
                        "notes": "Further tests required"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Samantha Aguilar",
                    "Age": 67,
                    "Gender": "Male",
                    "aadhar_id": 802793538513,
                    "email": "perkinsshannon@yahoo.com",
                    "password": "Rc4Oh0q%W*"
                },
                "Emergency_Contact": {
                    "name": "Chase Avila",
                    "Relationship": "Sibling",
                    "Phone": "(632)371-3585x03244"
                },
                "Medical_Information": {
                    "Blood_Group": "B+",
                    "Allergies": "Seafood"
                },
                "Current_Medication": [
                    {
                        "Name": "Herself Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "05 Nov 2024 to 24 May 2025",
                        "Instruction": "Take with water"
                    },
                    {
                        "Name": "Certainly Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "05 Jul 2023 to 12 Jan 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Every Tablet",
                        "Frequency": "Every 8 hours",
                        "Period": "24 Apr 2023 to 02 Jun 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Affect Syrup",
                        "Period": "24 May 2023 to 13 Oct 2025"
                    },
                    {
                        "Name": "Series Syrup",
                        "Period": "05 May 2023 to 15 Oct 2025"
                    },
                    {
                        "Name": "Certain Syrup",
                        "Period": "22 Apr 2024 to 30 Dec 2024"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "CT Scan",
                        "Date": "04 Aug 2024",
                        "Result": "Requires Follow-up"
                    },
                    {
                        "Type": "MRI",
                        "Date": "16 Nov 2024",
                        "Result": "Normal"
                    },
                    {
                        "Type": "X-Ray",
                        "Date": "20 Aug 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Asthma",
                        "date": "28 Nov 2023",
                        "doctor": "Todd Durham",
                        "notes": "Condition under control"
                    }
                ]
            },
            {
                "Patient": {
                    "Name": "Amanda Flores",
                    "Age": 43,
                    "Gender": "Male",
                    "aadhar_id": 776228058921,
                    "email": "jessica96@gmail.com",
                    "password": "#h7P2S5hz4"
                },
                "Emergency_Contact": {
                    "name": "Jeffrey Zavala",
                    "Relationship": "Spouse",
                    "Phone": "(677)635-1059x983"
                },
                "Medical_Information": {
                    "Blood_Group": "O+",
                    "Allergies": "Pollen"
                },
                "Current_Medication": [
                    {
                        "Name": "Response Tablet",
                        "Frequency": "Once a day",
                        "Period": "29 Nov 2023 to 15 Jan 2024",
                        "Instruction": "Take before bed"
                    },
                    {
                        "Name": "Commercial Tablet",
                        "Frequency": "Twice a day",
                        "Period": "31 Jan 2024 to 24 Feb 2024",
                        "Instruction": "Take with water"
                    }
                ],
                "Past_Medication": [
                    {
                        "Name": "Figure Syrup",
                        "Period": "04 Mar 2024 to 06 Jul 2024"
                    },
                    {
                        "Name": "Effect Syrup",
                        "Period": "14 Jul 2024 to 04 Jul 2025"
                    },
                    {
                        "Name": "Major Syrup",
                        "Period": "26 Apr 2024 to 18 Dec 2025"
                    }
                ],
                "Lab_Results": [
                    {
                        "Type": "X-Ray",
                        "Date": "31 Jul 2024",
                        "Result": "Requires Follow-up"
                    }
                ],
                "Diagnosis": [
                    {
                        "condition": "Migraine",
                        "date": "26 Sep 2023",
                        "doctor": "Carrie Melton",
                        "notes": "Condition under control"
                    }
                ]
            }
        ]

    Patient.insertMany(patientData)
    .then(() => {
        console.log("✅ Data inserted successfully!");
        mongoose.connection.close(); // Close connection after insert
    })
    .catch(err => {
        console.log("❌ Error inserting data: ", err);
        mongoose.connection.close();
    });
