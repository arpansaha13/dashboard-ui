import React, { useState, useMemo } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Paper,
  Modal,
  Button,
  Checkbox,
  Menu,
  MenuItem,
} from '@mui/material'
import { useTable, useSortBy } from 'react-table'
import {
  Add,
  MoreVert,
  SortByAlphaTwoTone,
  FilterList,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material'
import { useAppSelector } from '../store/hooks.ts'
import { selectIsDark } from '../store/features/dark/dark.slice'
import Person1 from '../components/rightPanel/Images/person1.svg'
import Person7 from '../components/rightPanel/Images/person7.svg'
import Person8 from '../components/rightPanel/Images/person8.svg'
import Person9 from '../components/rightPanel/Images/person9.svg'
import Person10 from '../components/rightPanel/Images/person10.svg'
import Person11 from '../components/rightPanel/Images/person11.svg'
import { initialData, columns } from '../components/orderTable/data'

const OrdersTable = () => {
  const isDark = useAppSelector(selectIsDark)

  const [data, setData] = useState(initialData)
  const [searchInput, setSearchInput] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRows, setSelectedRows] = useState({})
  const [newRow, setNewRow] = useState({
    id: '',
    user: '',
    project: '',
    address: '',
    date: '',
    status: '',
  })
  const [menuAnchor, setMenuAnchor] = useState(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  const filteredData = useMemo(() => {
    return data.filter(row => {
      const matchesSearch =
        row.user.toLowerCase().includes(searchInput.toLowerCase()) ||
        row.project.toLowerCase().includes(searchInput.toLowerCase())
      return matchesSearch
    })
  }, [data, searchInput])

  const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage))

  const tableInstance = useTable(
    {
      columns,
      data: filteredData,
    },
    useSortBy,
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  // PAGINATION: Only display rows for the current page
  const pagedRows = rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage,
  )

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleSearchChange = e => setSearchInput(e.target.value)
  const toggleFilter = () => setIsFilterOpen(prev => !prev)

  const handleNewRowChange = e => {
    const { name, value } = e.target
    setNewRow(prev => ({ ...prev, [name]: value }))
  }

  const handleAddRow = () => {
    setData([...data, { ...newRow, icon: getIconForUser(newRow.user) }])
    setNewRow({
      id: '',
      user: '',
      project: '',
      address: '',
      date: '',
      status: '',
    })
    handleCloseModal()
  }

  const handleMenuOpen = event => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  const handleCheckboxChange = rowId => {
    setSelectedRows(prev => ({
      ...prev,
      [rowId]: !prev[rowId],
    }))
  }

  const handleDelete = () => {
    setData(data.filter(row => !selectedRows[row.id]))
    setSelectedRows({})
    handleMenuClose()
  }

  const handleHide = () => {
    const updatedData = data.map(row =>
      selectedRows[row.id] ? { ...row, hidden: true } : row,
    )
    setData(updatedData)
    setSelectedRows({})
    handleMenuClose()
  }

  const getStatusStyles = status => {
    switch (status) {
      case 'In Progress':
        return { color: '#8A8CD9', dotColor: '#8A8CD9' }
      case 'Complete':
        return { color: '#4AA785', dotColor: '#4AA785' }
      case 'Pending':
        return { color: '#59A8D4', dotColor: '#59A8D4' }
      case 'Approved':
        return { color: '#FFC555', dotColor: '#FFC555' }
      case 'Rejected':
        return { color: '#1C1C1C66', dotColor: '#1C1C1C66' }
      default:
        return { color: 'black', dotColor: 'black' }
    }
  }

  const getIconForUser = userName => {
    switch (userName) {
      case 'Natali Craig':
        return Person7
      case 'Kate Morrison':
        return Person8
      case 'Drew Cano':
        return Person9
      case 'Orlando Diggs':
        return Person10
      case 'Andi Lane':
        return Person11
      default:
        return Person1
    }
  }

  // Reset currentPage if filteredData shrinks below currentPage after filtering or deletion
  React.useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [filteredData.length, totalPages, currentPage])

  return (
    <main className="flex h-full max-h-[90vh] flex-col gap-4 overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <h4 className={isDark ? 'text-light' : 'text-dark'}>Order List</h4>
      <Paper
        elevation={3}
        sx={{
          borderRadius: '12px',
          overflow: 'hidden',
          bgcolor: isDark ? '#1e1e1e' : '#FFFFFF',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            bgcolor: isDark ? '#FFFFFF0D' : '#F7F9FB',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={handleOpenModal}>
              <Add sx={{ color: isDark ? 'white' : 'black' }} />
            </IconButton>
            <IconButton onClick={toggleFilter}>
              <FilterList sx={{ color: isDark ? 'white' : 'black' }} />
            </IconButton>
            <IconButton {...headerGroups[0].headers[1].getSortByToggleProps()}>
              <SortByAlphaTwoTone sx={{ color: isDark ? 'white' : 'black' }} />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              value={searchInput}
              onChange={handleSearchChange}
              InputProps={{ sx: { bgcolor: 'white', borderRadius: 2 } }}
            />
            <IconButton onClick={handleMenuOpen}>
              <MoreVert sx={{ color: isDark ? 'white' : 'black' }} />
            </IconButton>
            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleDelete}>Delete</MenuItem>
              <MenuItem onClick={handleHide}>Hide</MenuItem>
            </Menu>
          </Box>
        </Toolbar>

        {isFilterOpen && (
          <Box sx={{ p: 2, backgroundColor: isDark ? '#2a2a2a' : '#F7F9FB' }}>
            <Typography
              variant="body2"
              mb={1}
              sx={{ color: isDark ? 'white' : 'black' }}
            >
              Filter by Project:
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Type to filter project name"
              InputProps={{ sx: { bgcolor: 'white', borderRadius: 2 } }}
            />
          </Box>
        )}

        <TableContainer>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    onChange={e => {
                      const isChecked = e.target.checked
                      const newSelectedRows = {}
                      pagedRows.forEach(row => {
                        newSelectedRows[row.original.id] = isChecked
                      })
                      setSelectedRows(newSelectedRows)
                    }}
                    checked={
                      pagedRows.length > 0 &&
                      pagedRows.every(row => selectedRows[row.original.id])
                    }
                    indeterminate={
                      pagedRows.some(row => selectedRows[row.original.id]) &&
                      !pagedRows.every(row => selectedRows[row.original.id])
                    }
                  />
                </TableCell>
                {headerGroups[0].headers.map(column => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      color: isDark ? 'white' : '#1C1C1C66',
                      borderBottom: isDark
                        ? '1px solid #444'
                        : '1px solid #ddd',
                    }}
                  >
                    {column.render('Header')}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody {...getTableBodyProps()}>
              {pagedRows.map(row => {
                prepareRow(row)
                return !row.original.hidden ? (
                  <TableRow
                    {...row.getRowProps()}
                    sx={{
                      backgroundColor: isDark
                        ? row.index % 2 === 0
                          ? '#333'
                          : '#1e1e1e'
                        : '#FFFFFF',
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={selectedRows[row.original.id] || false}
                        onChange={() => handleCheckboxChange(row.original.id)}
                      />
                    </TableCell>
                    {row.cells.map(cell => (
                      <TableCell
                        {...cell.getCellProps()}
                        sx={{
                          color: isDark ? 'white' : 'black',
                          borderBottom: isDark
                            ? '1px solid #444'
                            : '1px solid #ddd',
                        }}
                      >
                        {cell.column.id === 'user' ? (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                              src={row.original.icon}
                              alt="user icon"
                              style={{
                                width: '24px',
                                height: '24px',
                                marginRight: '8px',
                              }}
                            />
                            {cell.render('Cell')}
                          </Box>
                        ) : cell.column.id === 'status' ? (
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span
                              style={{
                                display: 'inline-block',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: getStatusStyles(
                                  row.original.status,
                                ).dotColor,
                                marginRight: '8px',
                              }}
                            />
                            <span
                              style={{
                                color: getStatusStyles(row.original.status)
                                  .color,
                                fontSize: 12,
                              }}
                            >
                              {cell.render('Cell')}
                            </span>
                          </Box>
                        ) : (
                          cell.render('Cell')
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ) : null
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: '12px',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Order
            </Typography>
            {Object.keys(newRow).map(field => (
              <TextField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                fullWidth
                margin="dense"
                name={field}
                value={newRow[field]}
                onChange={handleNewRowChange}
              />
            ))}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleAddRow}
            >
              Add Order
            </Button>
          </Box>
        </Modal>
      </Paper>

      {/* PAGINATION CONTROLS */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <IconButton
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          sx={{
            'color': isDark ? 'white' : 'black',
            'bgcolor': 'transparent',
            '&:disabled': { opacity: 0.3 },
          }}
          aria-label="previous page"
        >
          <ChevronLeft />
        </IconButton>
        {Array.from({ length: totalPages }).map((_, idx) => {
          const num = idx + 1
          return (
            <Typography
              key={num}
              variant="body1"
              onClick={() => setCurrentPage(num)}
              sx={{
                mx: 1,
                px: 2,
                py: 1,
                borderRadius: '8px',
                backgroundColor:
                  currentPage === num
                    ? isDark
                      ? '#a2a1d2ff'
                      : '#1C1C1C66'
                    : 'transparent',
                color:
                  currentPage === num
                    ? isDark
                      ? 'white'
                      : 'black'
                    : isDark
                      ? 'white'
                      : 'black',
                cursor: currentPage === num ? 'default' : 'pointer',
                fontWeight: currentPage === num ? 600 : 400,
              }}
            >
              {num}
            </Typography>
          )
        })}
        <IconButton
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          sx={{
            'color': isDark ? 'white' : 'black',
            'bgcolor': 'transparent',
            '&:disabled': { opacity: 0.3 },
          }}
          aria-label="next page"
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </main>
  )
}

export default OrdersTable
