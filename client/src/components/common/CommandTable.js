/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { toggleCommand } from '../../services/botConnect';

const CommandTable = ({ commands }) => {
  const toggleEnabled = command => {
    toggleCommand(command);
    window.location.reload(false);
  };

  return (
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
                      {command.enabled ? (
                        <span role="button" className="badge badge-success" onClick={() => toggleEnabled(command.command)}>
                          Enabled
                        </span>
                      ) : (
                        <span role="button" className="badge badge-danger" onClick={() => toggleEnabled(command.command)}>
                          Disabled
                        </span>
                      )}
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
};

export default CommandTable;
