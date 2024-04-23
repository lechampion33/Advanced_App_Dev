import React, { useState, useEffect } from 'react';
import axiosInstance from '../../components/Public/AxiosInstance';

function AdminMails() {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    fetchMails();
  }, []);

  const fetchMails = async () => {
    try {
      const response = await axiosInstance.get('http://localhost:8080/api/contact/getcontact');
      setMails(response.data);
    } catch (error) {
      console.error('Error fetching mails:', error);
    }
  };

  const replyMail = (mailId, recipientEmail) => {
    const mailtoLink = `mailto:${recipientEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col w-screen">
      <h2 className="font-sans text-2xl font-bold p-8">Mail Details:</h2>
      <table className="border-collapse justify-center items-center ml-10 border w-[70%]">
        <thead>
          <tr>
            <th className="border p-1 border-gray-600">S.No</th>
            <th className="border p-1 border-gray-600">User</th>
            <th className="border p-1 border-gray-600">Email</th>
            <th className="border p-1 border-gray-600">Message</th>
            <th className="border p-1 border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mails.map((mail, index) => (
            <tr key={mail.coid}>
              <td className="border border-gray-600 p-1">{index + 1}</td>
              <td className="border p-1 border-gray-600">{mail.email}</td>
              <td className="border p-1 border-gray-600">{mail.subject}</td>
              <td className="border p-1 border-gray-600">{mail.message}</td>
              <td className="border p-1 flex flex-row gap-3 border-gray-600">
                <button
                  className="bg-blue-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => replyMail(mail.coid, mail.email)}
                >
                  Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminMails;
