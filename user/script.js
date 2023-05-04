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
let data=[];
const Address = "0xC98419b2617d45359336519684F5940A35e1bdf7";


const updates = async()=>{
    if(window.ethereum!=="undefined"){
		const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
		dat = await window.contract.methods.getfromDev().call();
        for(let i = dat.length-1;i>=0;i--){
            let temp = dat[i];
            if(temp.deployed==true){
                data.push(temp)
            }
        }
        let tbody = ``;

        for(let i = data.length-1;i>=0;i--){
            tbody += `<tr>`
            let temp = data[i];
            const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(temp.patch))], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            if(data[i].deployed==true){
				tbody+=`
				<td><center><strong>${temp.patchName}</strong></center></td>
				<td><center><strong>${temp.vno}</strong></center></td>
                    <td><center>${temp.timeofReport}</center></td>
                    <td><center><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#desc${i}">
					WHAT'S NEW
				</button></center></td>
                    <td><a href="${url}" download = "${temp.filename}" class="btn btn-secondary">DOWNLOAD</a></td>`
            tbody+=`</tr>`
            ;
			}
        }
        if(data.length!=0) document.getElementById("released").innerHTML = tbody;
        let modd=``
        for(let i = 0;i<data.length;i++){
            let temp = data[i];
            if(temp.vno.length>0){
            let dd = temp.patchDescription.split("\n");
			modd+=`<div class="modal fade" id="desc${i}" tabindex="-1" aria-labelledby="descof${i}" aria-hidden="true">
			<div class="modal-dialog">
			  <div class="modal-content">
				<div class="modal-header">
				  <h1 class="modal-title fs-5" id="descof${i}">WHAT'S NEW</h1>
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
        }
        document.getElementById('modals').innerHTML = modd
        $(document).ready(function () {
            $('#example').DataTable({
                order: [[2, 'desc']],
            });
        });
	}
}