const baseUrl = "https://api.cqcdq.top/1.1/classes"
const request = (
url = "", date = 0, type = 'GET', 
header = {
	"X-LC-Id": "YmxtXd9fi5T8nTjKNXi9d6kD-gzGzoHsz",
	"X-LC-Key": "yOukXGpAikemVTD69jHyok0z",
	"Content-Type": "application/json"
}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: baseUrl + url,
			data: date,
			header: header,
			dataType:'json',
		}).then((response) => {
			setTimeout(function() {
					uni.hideLoading();
				},200);
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});}
export default request
