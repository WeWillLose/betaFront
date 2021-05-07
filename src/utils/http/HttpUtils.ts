export default {
  getFilenameFromHeaders(headers:Record<string,string>): string {
    let filename = '';
    const disposition = headers['Content-Disposition'] || headers['content-disposition'];
    if (disposition && disposition.indexOf('attachment') !== -1) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(disposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
      }
    }
    console.log(filename)
    return filename;
  }
}
