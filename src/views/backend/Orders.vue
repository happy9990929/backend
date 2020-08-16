<template>
  <div class="p-4">
    <h3 class="my-4">訂單列表</h3>
    <div class="card">
      <div class="card-body">
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">下單時間</th>
                <th scope="col">購買款項</th>
                <th scope="col">付款方式</th>
                <th scope="col">應付金額</th>
                <th scope="col">是否付款</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1">尚未付款</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav class="mt-5">
          <ul class="pagination pagination-rounded justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
