/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const CommandTable = ({ commands }) => (
  <div className="table-responsive">
    <div id="dataTable_wrapper" className="dataTables_wrapper dt-bootstrap4">
      <div className="row">
        <div className="col-sm-12">
          <table className="table table-bordered dataTable" id="dataTable" width="100%" cellSpacing="0" role="grid" aria-describedby="dataTable_info">
            <thead>
              <tr role="row">
                <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1">Command</th>
                <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1">Response</th>
                <th className="sorting" tabIndex="0" aria-controls="dataTable" rowSpan="1" colSpan="1">Active</th>
              </tr>
            </thead>
            <tbody>
              {commands.map(command => (
                <tr role="row" key={command.command}>
                  <td>
                    <code>
                      {command.command}
                    </code>
                  </td>
                  <td>
                    {command.reply}
                  </td>
                  <td>
                    <span className="badge badge-success">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default CommandTable;
