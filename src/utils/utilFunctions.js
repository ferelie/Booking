export const formatDate = (dateString) => {
  const createdAtDate = new Date(dateString);
  return `${createdAtDate.getFullYear()}-${String(createdAtDate.getMonth() + 1).padStart(2, '0')}-${String(createdAtDate.getDate()).padStart(2, '0')} ${String(createdAtDate.getHours()).padStart(2, '0')}:${String(createdAtDate.getMinutes()).padStart(2, '0')}`;
};

