function testAwait() {
  return new Promise(resolve => {
    setTimeout(function() {
      console.log("testAwait");
      resolve();
    }, 1000);
  });
}
const data = await testAwait();
console.log('123456');

(async function () {
  const data = await testAwait()
  console.log('123456');
}())

//  总结: 封装的时候不需要加async异步修饰。在使用的时候修饰即可