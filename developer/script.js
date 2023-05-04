let forDeveloper = `<div class="accordion" id="accordionExample">`
let data;
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "time_rn",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "status",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "pname",
				"type": "string"
			}
		],
		"name": "approval",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "time_rn",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pname",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "deployment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "time_rn",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "time_dev",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pdesc",
				"type": "string"
			},
			{
				"internalType": "string[][]",
				"name": "bugs",
				"type": "string[][]"
			},
			{
				"internalType": "string[][]",
				"name": "features",
				"type": "string[][]"
			},
			{
				"internalType": "string[][]",
				"name": "bugsUn",
				"type": "string[][]"
			},
			{
				"internalType": "string[][]",
				"name": "featuresUn",
				"type": "string[][]"
			}
		],
		"name": "fromAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "timeofReport",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vno",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "bugTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugPriority",
								"type": "string"
							}
						],
						"internalType": "struct bugReport[]",
						"name": "bugRequest",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "featureTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featureDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featurePriority",
								"type": "string"
							}
						],
						"internalType": "struct featureReport[]",
						"name": "featureRequest",
						"type": "tuple[]"
					},
					{
						"internalType": "bool",
						"name": "deployed",
						"type": "bool"
					},
					{
						"internalType": "int256",
						"name": "uploaded",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "approved",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "filename",
						"type": "string"
					},
					{
						"internalType": "bytes",
						"name": "patch",
						"type": "bytes"
					}
				],
				"internalType": "struct listOfBnF[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getfromDev",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "timeofReport",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vno",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "bugTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugPriority",
								"type": "string"
							}
						],
						"internalType": "struct bugReport[]",
						"name": "bugRequest",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "featureTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featureDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featurePriority",
								"type": "string"
							}
						],
						"internalType": "struct featureReport[]",
						"name": "featureRequest",
						"type": "tuple[]"
					},
					{
						"internalType": "bool",
						"name": "deployed",
						"type": "bool"
					},
					{
						"internalType": "int256",
						"name": "uploaded",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "approved",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "filename",
						"type": "string"
					},
					{
						"internalType": "bytes",
						"name": "patch",
						"type": "bytes"
					}
				],
				"internalType": "struct listOfBnF[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "newPatches",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "timeofReport",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "vno",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "bugTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugPriority",
								"type": "string"
							}
						],
						"internalType": "struct bugReport[]",
						"name": "bugRequest",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "featureTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featureDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featurePriority",
								"type": "string"
							}
						],
						"internalType": "struct featureReport[]",
						"name": "featureRequest",
						"type": "tuple[]"
					},
					{
						"internalType": "bool",
						"name": "deployed",
						"type": "bool"
					},
					{
						"internalType": "int256",
						"name": "uploaded",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "approved",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "filename",
						"type": "string"
					},
					{
						"internalType": "bytes",
						"name": "patch",
						"type": "bytes"
					}
				],
				"internalType": "struct listOfBnF[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "previousReq",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "bugTitle",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bugDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "bugPriority",
						"type": "string"
					}
				],
				"internalType": "struct bugReport[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "featureTitle",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "featureDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "featurePriority",
						"type": "string"
					}
				],
				"internalType": "struct featureReport[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "reports",
		"outputs": [
			{
				"internalType": "bool",
				"name": "admin",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "time",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "requests",
		"outputs": [
			{
				"internalType": "string",
				"name": "timeofReport",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patchName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patchDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vno",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "deployed",
				"type": "bool"
			},
			{
				"internalType": "int256",
				"name": "uploaded",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "approved",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "filename",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "patch",
				"type": "bytes"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "send_list",
		"outputs": [
			{
				"components": [
					{
						"internalType": "bool",
						"name": "admin",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "bugTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "bugPriority",
								"type": "string"
							}
						],
						"internalType": "struct bugReport[]",
						"name": "bugsSent",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "featureTitle",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featureDescription",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "featurePriority",
								"type": "string"
							}
						],
						"internalType": "struct featureReport[]",
						"name": "featuresSent",
						"type": "tuple[]"
					}
				],
				"internalType": "struct fromReporter[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			},
			{
				"internalType": "string[][]",
				"name": "new_b",
				"type": "string[][]"
			},
			{
				"internalType": "string[][]",
				"name": "new_f",
				"type": "string[][]"
			}
		],
		"name": "toAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "unselectedBugs",
		"outputs": [
			{
				"internalType": "string",
				"name": "bugTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bugDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "bugPriority",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "unselectedFeatures",
		"outputs": [
			{
				"internalType": "string",
				"name": "featureTitle",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "featureDescription",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "featurePriority",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "time_rn",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ver",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fileName",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "_patch",
				"type": "bytes"
			}
		],
		"name": "uploadedbyDev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
let account;
const Address = "0xC98419b2617d45359336519684F5940A35e1bdf7";
const fromAdmin = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        data = await window.contract.methods.getRequests().call();

        // console.log(data)
		let temp = data[data.length-1];
		let dd = temp.patchDescription.split("\n");
		forDeveloper+=`<div class="accordion-item">
		<h2 class="accordion-header">
			<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#req${data.length-1}"
				aria-expanded="true" aria-controls="req${data.length-1}">
				${temp.patchName}
			</button>
		</h2>
		<div id="req${data.length-1}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
			<div class="accordion-body">
			<small>SENT AT: ${temp.timeofReport}</small><br>
			<div class="container border my-2 p-3">
			<h5>PATCH DESCRIPTION<br></h5>`
			for(j in dd){
				forDeveloper+=`${dd[j]}<br>`
			}
			forDeveloper+=`</div>
				<div class="row mt-3 gx-3">
					<div class="col">
						<div class="list-group">`
						for(j in temp.bugRequest){
							let temp1 = temp.bugRequest[j];
							forDeveloper+=`<li class="list-group-item list-group-item-action">
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">${temp1[0]}</h5>
							</div>
							<p class="mb-1">${temp1[1]}</p>
							<small>${temp1[2]}</small>
						</li>`
					}
					forDeveloper+=`</div>
						</div>
						<div class="col">
							<div class="list-group">`
					for(j in temp.featureRequest){
						let temp1 = temp.featureRequest[j];
						forDeveloper+=`<li class="list-group-item list-group-item-action">
						<div class="d-flex w-100 justify-content-between">
							<h5 class="mb-1">${temp1[0]}</h5>
						</div>
						<p class="mb-1">${temp1[1]}</p>
						<small>${temp1[2]}</small>
					</li>`
					}
					forDeveloper+=`</div>
					</div>
				</div>`
				forDeveloper+=`<div class="form-floating mb-3">
            <input type="number" class="form-control mt-3" id="versionfor${temp.patchName}" placeholder="VERSION NUMBER">
            <label for="versionfor${temp.patchName}">VERSION NUMBER</label>
			<div class="mb-3">
				<label for="filefor${data.length-1}" class="form-label mt-3">Upload Patch</label>
				<input class="form-control" type="file" id="filefor${data.length-1}">
			</div>
        </div>`
		// console.log(temp.uploaded)
		// console.log(temp.approved)
		// console.log(temp.timeofReport)
            if(temp.uploaded==0){
                forDeveloper+=`<center id="uploadstatus${data.length-1}">
                    <button class="btn btn-secondary" onclick="sendtoVerify(${data.length-1})">UPLOAD</button>
                </center>`
            }
            else if(temp.uploaded==-1){
                forDeveloper+=`<center id="uploadstatus${data.length-1}">
				REJECTED BY QA<br>
                <button class="btn btn-danger" onclick="sendtoVerify(${data.length-1})">RE-UPLOAD</button>
            </center>
                `
            }
			else if(temp.uploaded == 1 && temp.approved == 1){
				forDeveloper+=`<center id="uploadstatus${data.length-1}">
                APPROVED BY QA
            </center>
                `
			}
			else if(temp.uploaded == 1){
				forDeveloper+=`<center id="uploadstatus${data.length-1}">
                UPLOADED SUCCESSFULLY
            </center>
                `
			}
            forDeveloper+=`</div>
            </div>
        </div>`
        for(let i = data.length-2; i>=0;i--){
			// console.log(i)
            let temp = data[i];
			// // console.log(temp)
			let dd = temp.patchDescription.split("\n");
            forDeveloper+=`
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#req${i}"
                            aria-expanded=`
							if(temp.approved==1|| temp.approved == 0)
							forDeveloper+=`"false"`
							else 
							forDeveloper+= `"true"`
							forDeveloper+=`aria-controls="req${i}">
                            ${temp.patchName}
                        </button>
                    </h2>
                    <div id="req${i}" class="accordion-collapse collapse`
					if(temp.approved==1|| temp.approved == 0)
							forDeveloper+=``
							else 
							forDeveloper+= `show`
					forDeveloper+=`" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <small>SENT AT: ${temp.timeofReport}</small><br>
						<div class="container border p-3 my-2">
						<h5>PATCH DESCRIPTION<br></h5>`
						for(j in dd){
							forDeveloper+=`${dd[j]}<br>`
						}
						forDeveloper+=`</div>
                            <div class="row mt-3 gx-3">
                                <div class="col">
                                    <div class="list-group">`
                                    for(j in temp.bugRequest){
                                        let temp1 = temp.bugRequest[j];
                                        forDeveloper+=`<li class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">${temp1[0]}</h5>
                                        </div>
                                        <p class="mb-1">${temp1[1]}</p>
                                        <small>${temp1[2]}</small>
                                    </li>`
                                }
                                forDeveloper+=`</div>
                                    </div>
                                    <div class="col">
                                        <div class="list-group">`
                                for(j in temp.featureRequest){
                                    let temp1 = temp.featureRequest[j];
                                    forDeveloper+=`<li class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">${temp1[0]}</h5>
                                    </div>
                                    <p class="mb-1">${temp1[1]}</p>
                                    <small>${temp1[2]}</small>
                                </li>`
                                }
                                forDeveloper+=`</div>
                                </div>
                            </div>`
            forDeveloper+=`<div class="form-floating mb-3">
            <input type="number" class="form-control mt-3" id="versionfor${temp.patchName}" placeholder="VERSION NUMBER" required>
            <label for="versionfor${temp.patchName}">VERSION NUMBER</label>
			<div class="mb-3">
				<label for="filefor${i}" class="form-label mt-3">Upload Patch</label>
				<input class="form-control" type="file" id="filefor${i}">
			</div>
        </div>`
		// console.log(temp.uploaded)
		// console.log(temp.approved)
		// console.log(temp.timeofReport)
            if(temp.uploaded==0){
                forDeveloper+=`<center id="uploadstatus${i}">
                    <button class="btn btn-secondary" onclick="sendtoVerify(${i})">UPLOAD</button>
                </center>`
            }
            else if(temp.uploaded==-1){
                forDeveloper+=`<center id="uploadstatus${i}">
                <button class="btn btn-danger" onclick="sendtoVerify(${i})">RE-UPLOAD</button>
            </center>
                `
            }
			else if(temp.uploaded == 1 && temp.approved == 1){
				forDeveloper+=`<center id="uploadstatus${i}">
                APPROVED BY QA
            </center>
                `
			}          
			else if(temp.uploaded == 1){
				forDeveloper+=`<center id="uploadstatus${i}">
                UPLOADED SUCCESSFULLY
            </center>
                `
			}          
            forDeveloper+=`</div>
            </div>
        </div>`
        }
        forDeveloper+=`</div>`
        document.getElementById('list').innerHTML = forDeveloper;
		if(temp.approved==1){
			document.getElementById(`uploadstatus${i}`).innerHTML = `APPROVED BY QA`
		}  
    }
}

const sendtoVerify = async(i) =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
		// if(account=="0xF46B12C9a1fBEA201Ca4Ea75C30bF230D22Ddf0d"){
			data = await window.contract.methods.getRequests().call();
		console.log(i)
		
		let patchName = data[i].patchName;
		let patchVersion = document.getElementById(`versionfor${data[i].patchName}`).value;
		let fileinput = document.getElementById(`filefor${i}`);
		const file = fileinput.files[0];
		let fileName = file.name;
		const reader = new FileReader();
		reader.readAsArrayBuffer(file);
		reader.onload = async () => {
			const fileData = new Uint8Array(reader.result);
			// console.log(typeof(fileData));
			// console.log(fileData)
			// console.log(account);
			let dateofupload = new Date().toString().split(" ");
            let timeofupload=dateofupload[2]+" "+dateofupload[1]+ " "+ dateofupload[3]+" "+dateofupload[4]+" "+dateofupload[5];
			await contract.methods.uploadedbyDev(timeofupload, patchName, patchVersion, fileName, fileData).send({ from: account })
			document.getElementById(`uploadstatus${i}`).innerHTML = "UPLOADED SUCCESSFULLY";
		}
		// }
		// else{
		// 	document.getElementById(`uploadstatus${i}`).innerHTML = `
		// 	<div class="alert alert-danger" >
		// 	<center>WRONG ACCOUNT, PLEASE CHECK</center>
		//   </div>`
		// 	setTimeout(()=>{
		// 		document.getElementById(`uploadstatus${i}`).innerHTML = `<button class="btn btn-secondary" onclick="sendtoVerify(${i})">UPLOAD</button>`
		// 	},3000)
		// }
	}	

}