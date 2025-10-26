import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarLogged";
import "./Transaction.css";

export default function Transaction() {

  return (
    <>
      <Navbar />
      <div className="TransactionSpacer"></div>
        <div className="transaction-container">
        <h1 className='transaction-title'>Transactions</h1>
        <h3 className='date-transaction'>October 26th, 2025</h3>
        <details className="info-dropdown">
            <summary className="summary-transaction">
                <span>Donation OMS World AC.</span>
                <span >$ 50,560.00</span>
            </summary>

            <div className="table-transaction">
                <div className="table-grid">
                    <div className="label-transaction">Concept</div>
                    <div className="value-transaction">Lorem Ipsum</div>

                    <div className="label-transaction">Status</div>
                    <div className="value-transaction">Billing (Factura check)</div>

                    <div className="label-transaction">Reference</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">NGO Tax ID</div>
                    <div className="value-transaction">Status (Finished)</div>

                    <div className="label-transaction">Paid with</div>
                    <div className="value-transaction">Company Tax ID: Lorem Ipsum Time</div>

                    <div className="label-transaction">NGO Tax Certificate</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">Transaction ID</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">Invoice</div>
                    <div className="detail-row">
                        <a style={{cursor: "pointer", fontSize: "0.9em"}} target="_blank" rel="noreferrer">
                            <div>Tax_Certificate.pdf</div>
                        </a>
                    </div>

                </div>
            </div>

        </details>

        <details className="info-dropdown">
            <summary className="summary-transaction">
                <span>Donation Mexicanos Anonimos Ayuda AC</span>
                <span >$ 50,560.00</span>
            </summary>

            <div className="table-transaction">
                <div className="table-grid">
                    <div className="label-transaction">Concept</div>
                    <div className="value-transaction">Lorem Ipsum</div>

                    <div className="label-transaction">Status</div>
                    <div className="value-transaction">Billing (Factura check)</div>

                    <div className="label-transaction">Reference</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">NGO Tax ID</div>
                    <div className="value-transaction">Status (Finished)</div>

                    <div className="label-transaction">Paid with</div>
                    <div className="value-transaction">Company Tax ID: Lorem Ipsum Time</div>

                    <div className="label-transaction">NGO Tax Certificate</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">Transaction ID</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">Invoice</div>
                    <div className="detail-row">
                        <a style={{cursor: "pointer", fontSize: "0.9em"}} target="_blank" rel="noreferrer">
                            <div>Tax_Certificate.pdf</div>
                        </a>
                    </div>
                </div>
            </div>

        </details>
        
        <h3 className='date-transaction'>October 10th, 2025</h3>
        <details className="info-dropdown">
            <summary className="summary-transaction">
                <span>Nunca Te Quedes Solo Apoyo Comunitario AC MX.</span>
                <span >$ 50,560.00</span>
            </summary>

            <div className="table-transaction">
                <div className="table-grid">
                    <div className="label-transaction">Concept</div>
                    <div className="value-transaction">Lorem Ipsum</div>

                    <div className="label-transaction">Status</div>
                    <div className="value-transaction">Billing (Factura check)</div>

                    <div className="label-transaction">Reference</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">NGO Tax ID</div>
                    <div className="value-transaction">Status (Finished)</div>

                    <div className="label-transaction">Paid with</div>
                    <div className="value-transaction">Company Tax ID: Lorem Ipsum Time</div>

                    <div className="label-transaction">NGO Tax Certificate</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">Transaction ID</div>
                    <div className="value-transaction">Lorem Ipsum Time</div>

                    <div className="label-transaction">Invoice</div>
                    <div className="detail-row">
                        <a style={{cursor: "pointer", fontSize: "0.9em"}} target="_blank" rel="noreferrer">
                            <div>Tax_Certificate.pdf</div>
                        </a>
                    </div>
                </div>
            </div>

        </details>
        </div>
     </>
  );
}
