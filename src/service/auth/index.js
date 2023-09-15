import { tokenHeader, api, publicHeader } from "../../helpers/config";

//post method
class PostMethod {
  Register = async (data) => {
    return await api.post(`/api/v1/auth/register`, data).then((res) => {
      return res;
    });
  };

  Login = async (data) => {
    return await api.post(`/api/v1/auth/login`, data).then((res) => {
      return res;
    });
  };

  PostJawaban = async (data) => {
    return await api
      .post(`/api/v1/soal/post-jawaban`, data, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  PostSoal = async (category, data) => {
    return await api
      .post(`/api/v1/soal/post-soal/${category}`, data, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  PostMateri = async (data) => {
    return await api
      .post(`/api/v1/materi`, data, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  PostImage = async (data) => {
    return await api
      .post(`/api/v1/image`, data, {
        headers: publicHeader(),
      })
      .then((res) => {
        return res;
      });
  };
}
//end post method

//get method
class GetMethod {
  SoalList = async (category) => {
    return await api
      .get(`/api/v1/soal/list-soal/${category}`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetNilaiById = async (id) => {
    return await api
      .get(`/api/v1/soal/nilai/${id}`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetUserById = async (id) => {
    return await api
      .get(`/api/v1/auth/user-id/${id}`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetNilai = async () => {
    return await api
      .get(`/api/v1/soal/nilai-siswa`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetNilais = async () => {
    return await api
      .get(`/api/v1/soal/nilai`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetUsers = async (role) => {
    return await api
      .get(`/api/v1/auth/user/${role}`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetImages = async () => {
    return await api
      .get(`/api/v1/image/`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetOnlyImages = async () => {
    return await api
      .get(`/api/v1/image/images`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetUser = async () => {
    return await api
      .get(`/api/v1/auth/user-role`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  GetMateri = async () => {
    return await api
      .get(`/api/v1/materi`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };
}

//end get method

//put method

class UpdateMethod {
  UpdateEmail = async (id, data) => {
    return await api
      .put(`/api/v1/auth/update-email/${id}`, data, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  EditProfil = async (id, data) => {
    return await api
      .put(`/api/v1/auth/edit-profil/${id}`, data, {
        headers: publicHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  EditNilai = async (id, data) => {
    return await api
      .put(`/api/v1/soal/edit-nilai/${id}`, data, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  EditUser = async (id, data) => {
    return await api
      .put(`/api/v1/auth/edit-user/${id}`, data, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };
}
//end put method

//delete method
class DeleteMethod {
  DeleteNilaiById = async (id) => {
    return await api
      .delete(`/api/v1/soal/nilai/${id}`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };

  DeleteImageById = async (id) => {
    return await api
      .delete(`/api/v1/image/${id}`, {
        headers: tokenHeader(),
      })
      .then((res) => {
        return res;
      });
  };
}
//end delete method
//
export const getMethod = new GetMethod();
export const postMethod = new PostMethod();
export const updateMethod = new UpdateMethod();
export const deleteMethod = new DeleteMethod();
//
