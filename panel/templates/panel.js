export function indexHTML(defaultURL) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShawtyURL</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAMAAABIw9uxAAADAFBMVEUAAAD///+AgICqqqqAgL+ZmZmAqqqSkraAn5+OjqqAmbOLoqKAlaqJnZ2AkqSImaqPn5+HlqWOnKqGlKGMmaaGnqqLl6KFm6aKlaqFmaOJnaeEl6qJm6SElaeImaqMnKWHl6eLm6KHlqWKmaiHnKOKmKWGmqiJlqOGmaaJm6iGmKSImqaFl6iImaSLm6aImKiKmqWHl6eKmaiHm6WJmKeHmqSJl6WGmaeJm6SGmKaImqeGl6SImaaKm6eImKWKmqaHl6eJmaWHm6aJmKeHmqWJmKaHmaiImqWHmKaImqiGmKWImaeKmqSImKaJmqeImKWJmaaHmqeJmKWHmqaJmKeHmaWImqaHmKeImqWHmKaImaeJmqWImKaJmqeImKWJmaaHmqWJmKaHmqeJmKWHmaaImqeHmaWImaaHmKeImaWJmqaImaeJmaWImKaJmaeImqWJmaaHmaeImKaHmaaImqeHmaaImaaHmKWImaaJmqaImaWJmaaImKeJmaWImqaJmaeHmaWImKaHmaeImqWHmaaImaeHmKaImaaJmqeImaaJmaaImKWJmaaImqaImaWImaaImKaHmaWImqaHmaeImaWHmKaImaeJmqWImaaJmaeImKaJmaaImqeImaaImaaImKeHmaaImqaHmaWImaaHmKaImaWJmqaImaaJmaWImKaJmaeImqaImaaImaeImKaImaaImqeHmaaImaaHmKeImaaJmqaImaWJmaaImKaImaWImqaImaaImaWImKaImaaImqaHmaaImaaHmKaImaaJmqeImaaJmaaImKeImaaImqaImaWImaaImaaImaWImaaImaaImaaHmaaImaaJmaaImaaImaaImaaImaaImaaImaaImaaImaeImaaImaaImaeImaaHmaaImaWJmaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaImaWImaaImaaImaaImaaImaaImaaImaaImaaImaaImaaOMFr+AAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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"/>
    <style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --primary-color: #2563eb;
        --primary-hover: #1d4ed8;
        --danger: #dc2626;
        --danger-hover: #b91c1c;
        --warning: #eab308;
        --warning-hover: #ca8a04;
        --text: #1f2937;
        --text-light: #6b7280;
        --bg: #f3f4f6;
        --border: #e5e7eb;
        --radius: 8px;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Poppins', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        background-color: var(--bg);
        padding: 16px;
        color: var(--text);
        -webkit-font-smoothing: antialiased;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        background: white;
        border-radius: var(--radius);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        padding: 24px;
        position: relative;
    }

    @media (min-width: 640px) {
        body {
        padding: 24px;
        font-size: 18px;
        }
        .container {
        padding: 32px;
        }
    }

    h1 {
        font-size: 1.75rem;
        font-weight: 700;
        text-align: center;
        margin: 0 0 1.5rem;
        color: var(--text);
    }

    .form-group {
        margin-bottom: 1.25rem;
    }

    label {
        display: block;
        font-size: 0.9375rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: var(--text);
    }

    input[type="url"],
    input[type="text"],
    input[type="url"]::placeholder,
    input[type="text"]::placeholder {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: var(--text);
    }

    input[type="url"],
    input[type="text"] {
        width: 100%;
        padding: 0.75rem 1rem;
        background-color: #fff;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        transition: border-color 0.2s, box-shadow 0.2s;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    input[type="url"]::placeholder,
    input[type="text"]::placeholder {
        color: #9ca3af;
        opacity: 1;
    }

    input[type="url"]:focus,
    input[type="text"]:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }

    button[type="submit"] {
        display: block;
        width: 100%;
        padding: 0.75rem 1.5rem;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5;
        color: white;
        background-color: var(--primary-color);
        border: none;
        border-radius: var(--radius);
        cursor: pointer;
        transition: background-color 0.2s, transform 0.1s;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    button[type="submit"]:hover {
        background-color: var(--primary-hover);
    }

    button[type="submit"]:active {
        transform: translateY(1px);
    }

    /* Table styles */
    .table-container {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin: 1.5rem 0;
        border-radius: var(--radius);
        border: 1px solid var(--border);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 1rem; /* Match form font size */
        table-layout: fixed; /* Makes columns respect width */
    }

    /* Moved to after .url-cell for better organization */

    th {
        background-color: #f9fafb;
        font-weight: 600;
        font-size: 0.8125rem; /* Slightly larger for better readability */
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-light);
        white-space: nowrap;
    }

    tr:not(:last-child) td {
        border-bottom: 1px solid var(--border);
    }

    tr:hover {
        background-color: rgba(0, 0, 0, 0.01);
    }

    /* Action buttons */
    .action-buttons {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-start;
        padding: 0.25rem;
    }

    .action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        background: none;
        color: var(--text-light);
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 1.1rem;
    }

    .action-btn:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .action-btn.edit-btn:hover {
        color: var(--warning);
    }

    .action-btn.delete-btn:hover {
        color: var(--danger);
    }

    /* Table cells */
    th, td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid var(--border);
        vertical-align: middle;
    }

    /* URL cell */
    .url-cell {
        width: 60%;
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1rem; /* Match form input font size */
        line-height: 1.5; /* Match form input line height */
        padding: 0.75rem 1rem; /* Match form input padding */
    }

    /* Shortcode cell */
    td:nth-child(2) {
        width: 25%;
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1rem; /* Match form input font size */
        line-height: 1.5; /* Match form input line height */
        padding: 0.75rem 1rem; /* Match form input padding */
    }

    /* Actions cell */
    .actions-cell {
        width: 15%;
        min-width: 90px;
        white-space: nowrap;
        padding: 0.75rem 1rem; /* Match form input padding */
    }

    /* Moved and enhanced in the .url-cell section */

    /* Responsive adjustments */
    @media (max-width: 767px) {
        body {
        padding: 12px;
        }

        .container {
        padding: 16px;
        border-radius: 8px;
        }

        h1 {
        font-size: 1.5rem;
        margin-bottom: 1.25rem;
        }

        .table-container {
        width: 100%;
        margin: 1.5rem 0;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        }
        
        table {
        min-width: 100%;
        table-layout: auto;
        }

        th, td {
        padding: 0.5rem 1rem; /* Keep consistent horizontal padding */
        }

        .action-btn {
        width: 28px;
        height: 28px;
        font-size: 1rem;
        }
    }

    @media (max-width: 479px) {
        .action-buttons {
        flex-direction: row;
        justify-content: flex-start;
        padding: 0;
        }
    }
    /* Modal */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .modal-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    .modal {
        background: white;
        border-radius: var(--radius);
        padding: 24px;
        width: 90%;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }

    .modal-overlay.active .modal {
        transform: translateY(0);
    }

    .modal-header {
        margin-bottom: 16px;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .modal-body {
        margin-bottom: 24px;
        color: var(--text);
    }

    .modal-footer {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }

    .modal-btn {
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
        font-weight: 500;
        transition: all 0.2s;
    }

    .modal-btn-cancel {
        background: #f3f4f6;
        color: var(--text);
    }

    .modal-btn-cancel:hover {
        background: #e5e7eb;
    }

    .modal-btn-delete {
        background: var(--danger);
        color: white;
    }

    .modal-btn-delete:hover {
        background: var(--danger-hover);
    }
    </style>
</head>
<body>
  <div class="container">
    <h1>Shortlink Manager</h1>
    
    <form id="shortenForm" class="form-container">
      <div class="form-group">
        <label for="destination">Destination URL</label>
        <input type="url" id="destination" required 
               placeholder="https://example.com"
               aria-label="Enter destination URL">
      </div>
      <div class="form-group">
        <label for="shortcode">Short Code (optional)</label>
        <input type="text" id="shortcode" 
               placeholder="Leave empty for auto-generate"
               aria-label="Enter custom short code">
      </div>
      <button type="submit" class="submit-btn">
        <span class="btn-text">Create Short Link</span>
      </button>
    </form>

    <div class="table-container">
      <table aria-label="List of short links">
        <thead>
          <tr>
            <th>Destination URL</th>
            <th>Shortcode</th>
            <th class="actions-header">Actions</th>
          </tr>
        </thead>
        <tbody id="shortsTable">
          <!-- Rows will be inserted here by JavaScript -->
        </tbody>
      </table>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 2rem;">
    <button class="logout-btn" id="logoutBtn" aria-label="Logout" title="Logout" style="background: var(--danger); color: white; border: none; border-radius: var(--radius); padding: 10px 24px; cursor: pointer; font-family: 'Poppins', sans-serif; font-weight: 500; transition: all 0.2s; font-size: 0.95rem; }
    .logout-btn:hover { background: var(--danger-hover); transform: translateY(-1px); box-shadow: 0 2px 4px rgba(0,0,0,0.1); }">
      Logout
    </button>
  </div>

  <!-- Delete Confirmation Modal -->
  <div class="modal-overlay" id="deleteModal">
    <div class="modal">
      <div class="modal-header">Delete Short Link</div>
      <div class="modal-body">
        Are you sure you want to delete this short link? This action cannot be undone.
      </div>
      <div class="modal-footer">
        <button class="modal-btn modal-btn-cancel" id="cancelDelete">Cancel</button>
        <button class="modal-btn modal-btn-delete" id="confirmDelete">Delete</button>
      </div>
    </div>
  </div>

  <!-- Error Modal -->
  <div class="modal-overlay" id="errorModal">
    <div class="modal">
      <div class="modal-header">Error</div>
      <div class="modal-body" id="errorMessage">
        <!-- Error message will be inserted here -->
      </div>
      <div class="modal-footer">
        <button class="modal-btn modal-btn-cancel" id="closeError">Close</button>
      </div>
    </div>
  </div>
    <script>
        const defaultURL = "${defaultURL}";

        // Helper functions
        function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }

        function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
            return text.substring(0, maxLength) + '...';
        }

        // Main application code
        let editingCode = null;

        function renderRow(item) {
            const tr = document.createElement("tr");
            tr.setAttribute('data-code', item.code);
            tr.innerHTML = \`
                <td class="url-cell" title="\${escapeHtml(item.destination)}">
                    \${truncateText(escapeHtml(item.destination), 50)}
                </td>
                <td>
                    <a href="\${defaultURL}/\${encodeURIComponent(item.code)}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="short-link">
                        \${escapeHtml(item.code)}
                    </a>
                </td>
                <td class="actions-cell">
                    <div class="action-buttons">
                        <button type="button" 
                                class="action-btn edit-btn" 
                                aria-label="Edit \${escapeHtml(item.code)}"
                                title="Edit"
                                onclick="editShort('\${escapeHtml(item.code)}', '\${escapeHtml(item.destination)}')">
                            ✏️
                        </button>
                        <button type="button" 
                                class="action-btn delete-btn"
                                aria-label="Delete \${escapeHtml(item.code)}"
                                title="Delete"
                                onclick="showDeleteModal('\${escapeHtml(item.code)}')">
                            🗑️
                        </button>
                    </div>
                </td>
            \`;
            return tr;
        }

        async function loadShorts() {
            const res = await fetch("shorts");
            const data = await res.json();
            const tbody = document.getElementById("shortsTable");
            tbody.innerHTML = "";
            data.forEach(item => tbody.appendChild(renderRow(item)));
        }

        // Show error modal
        function showError(message) {
            const errorModal = document.getElementById('errorModal');
            const errorMessage = document.getElementById('errorMessage');
            errorMessage.textContent = message;
            errorModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Hide error modal
        function hideError() {
            const errorModal = document.getElementById('errorModal');
            errorModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Error modal event listeners
        document.getElementById('closeError').addEventListener('click', hideError);
        document.getElementById('errorModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('errorModal')) {
                hideError();
            }
        });

        // Form submission
        document.getElementById("shortenForm").addEventListener("submit", async (e) => {
            e.preventDefault();

            const destination = document.getElementById("destination").value.trim();
            let code = document.getElementById("shortcode").value.trim();

            // Basic validation
            if (!destination) {
                showError('Please enter a destination URL');
                return;
            }

            if (code && !/^[a-zA-Z0-9_-]+$/.test(code)) {
                showError('Shortcode can only contain letters, numbers, hyphens, and underscores');
                return;
            }

            try {
                const url = editingCode ? 
                    \`shorts/\${editingCode}\` : 
                    \`shorts\`;
            
                const method = editingCode ? 'PUT' : 'POST';
            
                const response = await fetch(url, {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ destination, code: code || null })
                });
            
                const data = await response.json();
            
                if (!response.ok) {
                if (data.code === 'DUPLICATE_CODE') {
                    showError('This shortcode is already in use. Please try a different one.');
                } else {
                    showError(data.error || 'An error occurred. Please try again.');
                }
                return;
            }
            
            // Reset form and reload the list
            e.target.reset();
            editingCode = null;
            loadShorts();
            
            } catch (error) {
                console.error('Error:', error);
                showError('An unexpected error occurred. Please try again.');
            }
        });

        let pendingDeleteCode = null;
        const deleteModal = document.getElementById('deleteModal');
        const confirmDeleteBtn = document.getElementById('confirmDelete');
        const cancelDeleteBtn = document.getElementById('cancelDelete');

        function showDeleteModal(code) {
            pendingDeleteCode = code;
            deleteModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function hideDeleteModal() {
            deleteModal.classList.remove('active');
            pendingDeleteCode = null;
            document.body.style.overflow = '';
        }

        async function deleteShort() {
            if (!pendingDeleteCode) return;

            try {
                await fetch(
                    \`shorts/\${pendingDeleteCode}\`, 
                    { method: "DELETE" }
                );
                loadShorts();
            } catch (error) {
                console.error('Error deleting short link:', error);
            } finally {
                hideDeleteModal();
            }
        }

        // Event listeners for modal
        confirmDeleteBtn.addEventListener('click', deleteShort);
        cancelDeleteBtn.addEventListener('click', hideDeleteModal);

        // Close modal when clicking outside
        deleteModal.addEventListener('click', (e) => {
            if (e.target === deleteModal) {
                hideDeleteModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                hideDeleteModal();
            }
        });

        function editShort(code, destination) {
            document.getElementById("destination").value = destination;
            document.getElementById("shortcode").value = code;
            editingCode = code;
        }

        // Add logout functionality
        document.getElementById('logoutBtn').addEventListener('click', async () => {
            try {
                const response = await fetch('/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin'
                });

                if (response.ok) {
                    window.location.href = '/login';
                } else {
                    showError('Failed to logout. Please try again.');
                }
            } catch (error) {
                console.error('Logout error:', error);
                showError('An error occurred during logout.');
            }
        });

        loadShorts();
    </script>
</body>
</html>
`;
}