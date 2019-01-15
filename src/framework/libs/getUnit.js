import Vue from 'vue'
import api from '_src/api'
import store from '_src/store/index'

let getUnitInfo = function (callback) {
	api.getUploadFileTypeDict()
		.then(res => {
			let result = res.data.data || null;
			if (!result) { return; }
			store.commit('UPLOAD_FILE_TYPE_DICT', result);
		})
	api.getCodedict()
		.then(res => {
			let result = res.data.data || null;
			if (!result) { return; }
			store.commit('CODEDICT', result);
		})
	api.getUnitInfo()
		.then(res => {
			store.commit('UNITINFO', res.data.data);
			store.commit('SET_SYSNAME', res.data.data.unitInfo.name);
			store.commit('PRIMARYSTATUS', res.data.data.unitInfo.reportStatus);
			let approveRid = res.data.data.unitInfo.rid; if (callback) { callback() }
			api.getReportApprovedFlag({ params: { unitId: approveRid } })
				.then(res => {
					let data = res.data.data;
					store.commit('COVER', data.cover);
					store.commit('FIRSTSTATUS', data.unit);
					store.commit('SECONDSTATUS', data.house);
					store.commit('THIRDSTATUS', data.houseUse);
					store.commit('FOURTHSTATUS', data.houseRent);
					store.commit('FIFTHSTATUS', data.houseLoan);
					if (callback) { callback() }
				})
		});
}
export default getUnitInfo
