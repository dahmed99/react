// import React from 'react';
// import './pricing.css';

// const PricingPage = () => {
//   return (
//     <div>
//       <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
//         <h1 className="my-2 mr-md-auto font-weight-normal">PT Observability Automation</h1>
//         <nav className="my-2 my-md-0 mr-md-3">
//           <a className="p-2 text-dark" href="#">Documentation</a>
//           <a className="p-2 text-dark" href="#">Support</a>
//         </nav>
//       </div>

//       <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
//         <p className="lead">Welcome to the CIB Payments Technology Observability Tool. Simply enter some details about your app and weâll add the Observability. Our Automated Tool will raise a Pull Request within seconds.</p>
//       </div>

//       <div className="container">
//         <form action="" method="post">
//           <div className="form-group">
//             <label htmlFor="input_file_path">Input File Path</label>
//             <input type="text" className="form-control" name="input_file_path" id="input_file_path" placeholder="e.g. kube/kustomize/base/deployment.yml" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="platform">Platform</label>
//             <select name="platform" id="platform" className="form-control">
//               <option selected>EKS</option>
//               <option>ECS</option>
//               <option>EC2</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="repo_clone_url">Code Repo URL</label>
//             <input type="url" className="form-control" name="repo_clone_url" id="repo_clone_url" placeholder="e.g. https://bitbucketdc.jpmchase.net/projects/WPTSRE/repos/ptsre-automation-framenork-ui" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="branch">Branch</label>
//             <input type="text" className="form-control" name="branch" id="branch" placeholder="e.g. Master" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eks_terraform_repo">Terraform Repo URL</label>
//             <input type="text" className="form-control" name="eks_terraform_repo" id="eks_terraform_repo" placeholder="e.g. https://bitbucketdc.jpmchase.net/projects/WPTSRE/repos/ptsre-automation-terraforn" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="eks_terraform_branch">Terraform Branch</label>
//             <input type="text" className="form-control" name="eks_terraform_branch" id="eks_terraform_branch" placeholder="e.g. Master" />
//           </div>
//           <button type="submit" className="btn btn-dark">Submit</button>
//         </form>

//         <footer className="pt-4 my-md-5 pt-md-5 border-top">
//           <div className="row">
//             <div className="col-6 col-md">
//               <h5>Documentation</h5>
//               <ul className="list-unstyled text-small">
//                 <li><a className="text-muted" href="#">Getting Started</a></li>
//               </ul>
//             </div>
//             <div className="col-6 col-md">
//               <h5>Support</h5>
//               <ul className="list-unstyled text-small">
//                 <li><a className="text-muted" href="#">Symphony</a></li>
//                 <li><a className="text-muted" href="#">Raise a Ticket</a></li>
//               </ul>
//             </div>
//             <div className="col-6 col-md">
//               <h5>About</h5>
//               <ul className="list-unstyled text-small">
//                 <li><a className="text-muted" href="#">Team</a></li>
//               </ul>
//             </div>
//             <div className="col-md-12 text-center">
//               <img className="img-fluid" src="Morgan_Logo_2@@8_1.svg.png" alt="Morgan Logo" width="128" height="28" />
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default PricingPage;