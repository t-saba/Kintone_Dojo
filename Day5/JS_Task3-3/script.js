'use strict';
$(document).ready(() => {
  const apiKey = 'dj00aiZpPWxiSkZRTDMxQmdZTyZzPWNvbnN1bWVyc2VjcmV0Jng9ZTQ-';
  const url =`https://map.yahooapis.jp/search/zip/V1/zipCodeSearch?appid=${apiKey}`;

  $('#zipSearch').on('click', () => {
    console.log($('#zipCode').val());

    $.ajax({
      url: `${url}&query=${$('#zipCode').val()}&output=json`,
      dataType: 'jsonp'
    }).done((resp) => {
      // console.log(resp);
      // レスポンス内の要素を取得する
      const add = resp.Feature[0].Property.Address;
      const Geo = resp.Feature[0].Geometry.Coordinates.split(',') //カンマで文字列を区切る
      const sta = resp.Feature[0].Property.Station[0].Name;
      // console.log(add);
      // console.log(GEO);
      // 要素を反映させる
      $('#address').text(add);
      $('#longitude').text(Geo[0]);
      $('#latitude').text(Geo[1]);
      $('#station').text(sta + '駅');
    }).fail((err) => {
      console.log(err);
    });
  });
});