import React from "react";
import "boxicons";

const Customers = () => {
  return (
    <div className="w-[1140px] h-screen p-4 bg-zinc-100">
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-center text-3xl ">
          <h1>Customers</h1>
        </div>
        <div className="flex">
          <input type="text" placeholder="Search..." className="px-4" />
          <div className="bg-white flex items-center">
            <box-icon name="search" color="gray"></box-icon>
          </div>
        </div>
        <div>
          <table className="rounded-lg m-auto bg-white text-center">
            <thead>
              <tr className="bg-[#c68a55] text-white">
                <th className="p-2 px-24">Name</th>
                <th className="p-2 px-24">Phone Number</th>
                <th className="p-2 px-24">Created</th>
                <th className="p-2 px-24">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <button>
                    <box-icon name="edit" color="gray"></box-icon>
                  </button>
                  <button>
                    <box-icon name="lock-alt" color="gray"></box-icon>
                  </button>
                  <button>
                    <box-icon name="trash" color="gray"></box-icon>
                  </button>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
              <tr className="border-y">
                <td>
                  <p>Robert Fox</p>
                  <p className="text-gray-500">robert@gmail.com</p>
                </td>
                <td>(201)555-0124</td>
                <td>6 April 2023</td>
                <td>
                  <box-icon name="edit" color="gray"></box-icon>
                  <box-icon name="lock-alt" color="gray"></box-icon>
                  <box-icon name="trash" color="gray"></box-icon>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <div>Showing 10 of 50</div>
                </td>
                <td></td>
                <td></td>
                <td className="p-2">
                  <div class="flex gap-2  ">
                    <button class="px-2 hover:text-gray-500 bg-[#d4a373] hover:bg-[#c68a55]">
                      1
                    </button>
                    <button class="px-2 hover:text-gray-500 bg-[#d4a373] hover:bg-[#c68a55]">
                      2
                    </button>
                    <button class="px-2 hover:text-gray-500 bg-[#d4a373] hover:bg-[#c68a55]">
                      3
                    </button>
                    <button class="px-2 hover:text-gray-500 bg-[#d4a373] hover:bg-[#c68a55]">
                      4
                    </button>
                    <button class="px-2 hover:text-gray-500 bg-[#d4a373] hover:bg-[#c68a55]">
                      5
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
