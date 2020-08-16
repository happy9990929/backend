<template>
  <div class="p-4">
    <h3 class="my-4">優惠券</h3>
    <div class="card">
      <div class="card-body">
        <button class="btn btn-orange">
          <i class="fas fa-plus-circle"></i>
          建立新的優惠券
        </button>
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">名稱</th>
                <th scope="col">折扣百分比</th>
                <th scope="col">到期日</th>
                <th scope="col">啟用</th>
                <th scope="col">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1"></label>
                  </div>
                </td>
                <td class="text-right">
                  <button class="btn btn-outline-orange mx-1">
                    <i class="far fa-edit"></i>
                  </button>
                  <button class="btn btn-outline-danger mx-1">
                    <i class="far fa-trash-alt"></i>
                  </button>
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
