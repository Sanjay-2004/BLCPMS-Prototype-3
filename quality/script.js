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
const Address = "0xC98419b2617d45359336519684F5940A35e1bdf7";
let data;
let account;
const fromDev = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        data = await window.contract.methods.getfromDev().call();
        // console.log((data.length));
        let tbody = ``;
        for(let i = data.length-1;i>=0;i--){
			console.log(data.length-i)
			console.log(data[i].patchName)
            tbody += `<tr>`
            let temp = data[i];
            const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(temp.patch))], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            if(data[i].vno.length>0){
				tbody+=`<td><center><strong>${data.length-i}</strong></center></td>
				<td><center><strong>${temp.patchName}</strong></center></td>
				<td><center><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#desc${i}">
					PATCH DESCRIPTION
				</button></center></td>
                    <td><center>${temp.timeofReport}</center></td>
                    <td><center><strong>${temp.vno}</strong></center></td>
                    <td><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#data${i}">
                        BUGS & FEATURES
                    </button>
                    </td>
                    <td><a href="${url}" download = "${temp.filename}" class="btn btn-secondary">DOWNLOAD</a></td>
                    <td>`
					
                    if(temp.approved==0){
                        tbody+=`<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
						<input type="radio" class="btn-check" name="approval${i}" value="ACCEPTED" id="accepted${i}" autocomplete="off" checked>
						<label class="btn btn-outline-success" for="accepted${i}">ACCEPT</label>
						<input type="radio" class="btn-check" name="approval${i}" value="REJECTED" id="rejected${i}" autocomplete="off">
						<label class="btn btn-outline-danger" for="rejected${i}">REJECT</label>
						</div></td><td><center id="deployed${i}"><button class="btn btn-secondary" onclick="verified(${i})">SUBMIT</button></center></td>`
                    }
					else if(temp.approved==-1 && temp.uploaded==1){
						tbody+=`<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
						<input type="radio" class="btn-check" name="approval${i}" value="ACCEPTED" id="accepted${i}" autocomplete="off" checked>
						<label class="btn btn-outline-success" for="accepted${i}">ACCEPT</label>
						<input type="radio" class="btn-check" name="approval${i}" value="REJECTED" id="rejected${i}" autocomplete="off">
						<label class="btn btn-outline-danger" for="rejected${i}">REJECT</label>
						</div></td><td><center id="deployed${i}"><button class="btn btn-danger" onclick="verified(${i})">RE-SUBMIT</button></center></td>`
					}
					else if(temp.approved==-1){
						tbody+=`<center>REJECTED</center></td><td><center id="deployed${i}">SENT FOR RE-UPLOAD</center></td>`
					}
                    else{
                        tbody+=`<center>APPROVED</center><td><center id="deployed${i}">SENT SUCCESSFULLY</center></td>`
                    }
                    
            tbody+=`</tr>`
			}
        }
        if(data.length!=0) document.getElementById("forcheck").innerHTML = tbody;
        let modd=``
        for(let i = 0;i<data.length;i++){
            let temp = data[i];
            if(temp.vno.length>0){
				modd+=`<div class="modal fade" id="data${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="data${i}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="data${i}Label">Bugs and Features Cleared</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">`
                        modd+=`<div class="row mt-3 gx-3">
                                    <div class="col">
                                        <div class="list-group">`
                                            for(j in temp.bugRequest){
                let temp1 = temp.bugRequest[j];
                modd+=`<li class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${temp1[0]}</h5>
                </div>
                <p class="mb-1">${temp1[1]}</p>
                <small>${temp1[2]}</small>
            </li>`
                                            }
                                modd+=`</div>
                                    </div>
                                    <div class="col">
                                        <div class="list-group">`
                                            for(j in temp.featureRequest){
                let temp1 = temp.featureRequest[j];
                modd+=`<li class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${temp1[0]}</h5>
                </div>
                <p class="mb-1">${temp1[1]}</p>
                <small>${temp1[2]}</small>
            </li>`
                                            }
                                modd+=`</div>
                                    </div>
                                </div>`
            modd+=`</div>
                </div>
            </div>
        </div>`
			}
			let dd = temp.patchDescription.split("\n");
			modd+=`<div class="modal fade" id="desc${i}" tabindex="-1" aria-labelledby="descof${i}" aria-hidden="true">
			<div class="modal-dialog">
			  <div class="modal-content">
				<div class="modal-header">
				  <h1 class="modal-title fs-5" id="descof${i}">PATCH DESCRIPTION</h1>
				  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">`
					for(j in dd){
						modd+=`${dd[j]}<br>`
					}
				modd+=`</div>
			  </div>
			</div>
		  </div>`
        }
        document.getElementById('modals').innerHTML = modd
        $(document).ready(function(){
            $('#example').DataTable();
        });
    }
}

const verified = async(i)=>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        let pname = data[i].patchName;
        let approved = document.querySelector(`input[name="approval${i}"]:checked`).value;
        let stat;
        if(approved == "ACCEPTED") stat=1;
        else if(approved == "REJECTED") stat = -1;
        console.log(stat);
        let arr = new Date().toString().split(" ");
        let date_rn=arr[2]+" "+arr[1]+ " "+ arr[3]+" "+arr[4]+" "+arr[5];
        console.log(date_rn)
        console.log(typeof(stat))
        console.log(pname)
        await window.contract.methods.approval(date_rn, stat, pname).send({from: account});
        document.getElementById(`deployed${i}`).innerHTML = "SENT SUCCESSFULLY"

    }
}