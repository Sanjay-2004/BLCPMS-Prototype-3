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
let data;
const Address = "0xC98419b2617d45359336519684F5940A35e1bdf7";

const deploy = async() =>{
	if(window.ethereum!=="undefined"){
		const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
		data = await window.contract.methods.getfromDev().call();
        // console.log((data.length));
        let tbody = ``;
		let sno = 1;
        for(let i = data.length-1;i>=0;i--){
            tbody += `<tr>`
            let temp = data[i];
            const blob = new Blob([new Uint8Array(web3.utils.hexToBytes(temp.patch))], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
			tbody+=`<td><center><strong>${sno++}</strong></center></td>
				<td><center><strong>${temp.patchName}</strong></center></td>
				<td><center><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#desc${i}">
					PATCH DESCRIPTION
				</button></center></td>`
				if(data[i].vno.length>0) tbody+=`<td><center><strong>${temp.vno}</strong></center></td>`
				else tbody+=`<td><center>NOT UPLOADED</center></td>`
                    tbody+=`<td><center>${temp.timeofReport}</center></td>
					<td><center><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#data${i}">
					BUGS & FEATURES
				</button></center></td>`
				if(temp.approved==1) tbody+=`<td><a href="${url}" download = "${temp.filename}" class="btn btn-secondary">DOWNLOAD</a></td>`
				else tbody+=`<td><center>PENDING</center></td>`
				if(temp.deployed==false && temp.approved == 1){
					tbody+=`<td><center id="deployed${i}"><button class="btn btn-secondary" onclick="deploynow(${i})" >DEPLOY</button></center></td>`
				}
				else if(temp.deployed==false) tbody+=`<td><center>N/A</center></td>`
				else if(temp.deployed==true){
					tbody+=`<td><center id="deployed${i}">DEPLOYED</center></td>`
				}
                    
            tbody+=`</tr>`
            // if(data[i].vno.length>0){
				
			// }
        }
        if(data.length!=0) document.getElementById("fordeploy").innerHTML = tbody;
        let modd=``
        for(let i = 0;i<data.length;i++){
            let temp = data[i];
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

const deploynow = async(i) =>{
	if(window.ethereum!=="undefined"){
		window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
		let pname = data[i].patchName
		let arr = new Date().toString().split(" ");
		let date_rn=arr[2]+" "+arr[1]+ " "+ arr[3]+" "+arr[4]+" "+arr[5];
		let k = true;
		await window.contract.methods.deployment(date_rn, pname, k).send({from: account});
		document.getElementById(`deployed${i}`).innerHTML = `DEPLOYED`
	}
	
}

const showData = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
		// console.log(accounts)
        account = accounts[0]
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.send_list().call();
        let bugList = data[0];
        let featureList = data[1];
        // console.log(typeof(bugList))
        for( i in bugList){
            let temp = bugList[i];
            new_list+=`<li class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${temp[0]}</h5>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" name="bugs_dev" value="${temp[0]},${temp[1]},${temp[2]}" id="bugs_in_this_patch">
                        </div>
                    </div>
                    <p class="mb-1">${temp[1]}</p>
                    <small>${temp[2]}</small>
                </li>`;
        }
        new_list+=`</div>
                </div>
                <div class="col">
                    <div class="list-group">`;
        for(i in featureList){
            let temp = featureList[i];
            new_list+=`<li class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${temp[0]}</h5>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="features_dev" value="${temp[0]},${temp[1]},${temp[2]}" id="featuress_in_this_patch">
                </div>
            </div>
            <p class="mb-1">${temp[1]}</p>
            <small>${temp[2]}</small>
        </li>`;
        }
        new_list+=`</div>
        </div>
    </div>`;
	if(bugList.length!=0 || featureList.length!=0 ){
		document.getElementById('finallist').innerHTML = new_list;
	}
    const ignored = await window.contract.methods.previousReq().call();
    let ignoredBugs = ignored[0];
    let ignoredFeatures = ignored[1];
    if(ignoredBugs.length!=0){
        for( i in ignoredBugs){
            let temp = ignoredBugs[i];
            ignored_ones+=`<li class="list-group-item list-group-item-action">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${temp[0]}</h5>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" name="bugs_dev" value="${temp[0]},${temp[1]},${temp[2]}" id="bugs_in_this_patch">
                        </div>
                    </div>
                    <p class="mb-1">${temp[1]}</p>
                    <small>${temp[2]}</small>
                </li>`;
        }
        ignored_ones+=`</div>
                </div>
                <div class="col">
                    <div class="list-group">`;
    }
    if(ignoredFeatures.length!=0){
        for(i in ignoredFeatures){
            let temp = ignoredFeatures[i];
            ignored_ones+=`<li class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${temp[0]}</h5>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" name="features_dev" value="${temp[0]},${temp[1]},${temp[2]}" id="featuress_in_this_patch">
                </div>
            </div>
            <p class="mb-1">${temp[1]}</p>
            <small>${temp[2]}</small>
        </li>`;
        }
        ignored_ones+=`</div>
        </div>
    </div>`;
    }
    if(ignoredFeatures.length!=0 || ignoredBugs.length!=0){
        document.getElementById('prev_requests').innerHTML = ignored_ones
    }
    // console.log(typeof(ignoredFeatures));
    }
}


const sendtoDev = async() =>{
    if(window.ethereum!=="undefined"){
        let accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0]
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
    // if(account=="0x88834dd8708c72a00c562e093f9ba181f060186a"){
		arrayb = [];
        $("input:checkbox[name=bugs_dev]:checked").each(function() {
            let temp = $(this).val()
            let b_arr = temp.split(",");
            arrayb.push(b_arr);
        });
    arrayf = [];
        $("input:checkbox[name=features_dev]:checked").each(function() {
			let temp = $(this).val()
            let f_arr = temp.split(",");
            arrayf.push(f_arr);
        });
    let arr = new Date().toString().split(" ");
    let date_rn=arr[2]+" "+arr[1]+ " "+ arr[3]+" "+arr[4]+" "+arr[5];
    let pname = document.getElementById('floatingInput').value;
	let pdesc = document.getElementById('patch-description').value;
	// unchecked();
	arraybUn = [];
		$("input:checkbox[name=bugs_dev]:not(:checked)").each(function() {
			let temp = $(this).val()
			let b_arr = temp.split(",");
			arraybUn.push(b_arr);
		});
	arrayfUn = [];
		$("input:checkbox[name=features_dev]:not(:checked)").each(function() {
			let temp = $(this).val()
			let f_arr = temp.split(",");
			arrayfUn.push(f_arr);
		});
	// unchecked();
	await window.contract.methods.fromAdmin(date_rn, pname, pdesc, arrayb, arrayf, arraybUn, arrayfUn).send({from: account});
	document.getElementById("sent_req").innerHTML = "SENT SUCCESSFULLY"
	// } else{
	// 	document.getElementById("adminacc").innerHTML =
	// 	`<div class="alert alert-danger" >
	// 		<center>WRONG ACCOUNT, PLEASE CHECK</center>
	// 	</div>`
	// 		setTimeout(()=>{
	// 			document.getElementById("adminacc").innerHTML = `<button class="btn btn-secondary" onclick="sendtoDev()">REQUEST PATCH</button>`
	// 		},5000)
	// }
	}
}