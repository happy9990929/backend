<template>
  <div class="p-4">
    <h3 class="my-4">圖片儲存庫</h3>
    <div class="card">
      <div class="card-body">
        <div class="table-responsive mt-3">
          <table class="table text-center">
            <thead class="thead">
              <tr class="text-nowrap">
                <th scope="col">圖片縮圖</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>
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
