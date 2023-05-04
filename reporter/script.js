let account;
let bugsArray = [], featuresArray =[];
const addBug = () =>{
    let bugTitle = document.getElementById("bug-title").value;
    let bugDescription = document.getElementById("bug-description").value;
    let bugPriority = document.querySelector('input[name="bugs-priority"]:checked').value;
    bugsArray.push([bugTitle,bugDescription,bugPriority]);
    let bugsList = document.createElement('li');
    bugsList.className = 'list-group-item list-group-item-action';
    bugsList.setAttribute('aria-current', true);
    bugsList.innerHTML = `
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${bugTitle}</h5>
    </div>
    <p class="mb-1">${bugDescription}</p>
    <small>PRIORITY: ${bugPriority}</small>`;
    document.getElementById("bug-title").value = "";
    document.getElementById("bug-description").value = "";
    document.querySelector('input[name="bugs-priority"]:checked').checked = false;
document.getElementById('selected_bugs').appendChild(bugsList);
}

const addFeature = () =>{
    let featureTitle = document.getElementById("feature-title").value;
    let featureDescription = document.getElementById("feature-description").value;
    let featurePriority = document.querySelector('input[name="features-priority"]:checked').value;
    featuresArray.push([featureTitle,featureDescription,featurePriority]);
    let featuresList = document.createElement('li');
    featuresList.className = 'list-group-item list-group-item-action';
    featuresList.setAttribute('aria-current', true);
    featuresList.innerHTML = `
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${featureTitle}</h5>
    </div>
    <p class="mb-1">${featureDescription}</p>
    <small>PRIORITY: ${featurePriority}</small>`;
    document.getElementById("feature-title").value = "";
    document.getElementById("feature-description").value = "";
    document.querySelector('input[name="features-priority"]:checked').checked = false;
document.getElementById('selected_features').appendChild(featuresList);
}

const sendData = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];

        // if(account==`0x2dd029dcc18697922d368b4239072181ec86a66b`){
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
					"inputs": [
						{
							"internalType": "string",
							"name": "time",
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
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "",
							"type": "uint256"
						}
					],
					"name": "bugs_arr",
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
					"name": "features_arr",
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
					"inputs": [],
					"name": "submittedbyadmin",
					"outputs": [
						{
							"internalType": "bool",
							"name": "",
							"type": "bool"
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
				}
			];
			const Address = "0xC98419b2617d45359336519684F5940A35e1bdf7";
			let arr = new Date().toString().split(" ");
			let date_rn=arr[2]+" "+arr[1]+ " "+ arr[3]+" "+arr[4]+" "+arr[5];
			window.web3 = await new Web3(window.ethereum);
			window.contract = await new window.web3.eth.Contract(ABI, Address);
			await window.contract.methods.toAdmin(date_rn,bugsArray,featuresArray).send({from: account});
			document.getElementById("submit_button").innerHTML = "SUBMITTED SUCCESSFULLY"
			document.getElementById("selected_bugs").innerHTML = "NONE"
			document.getElementById("selected_features").innerHTML = "NONE"
		// }
		// else{
		// 	document.getElementById("submit_button").innerHTML = 
		// 	`<div class="alert alert-danger" >
		// 	<center>WRONG ACCOUNT, PLEASE CHECK</center>
		//   </div>`
		// 	setTimeout(()=>{
		// 		document.getElementById("submit_button").innerHTML = `<button class="btn btn-secondary" onclick="sendData()">SUBMIT LIST</button>`
		// 	},3000)
			
		// }

    }
}