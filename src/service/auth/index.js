import axios from "axios";
import { publicHeader, tokenHeader, api } from "../../helpers/config";

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
      .post(`/api/v1/soal/post-soal/:${category}`, data, {
        headers: tokenHeader(),
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

  GetUser = async () => {
    return await api
      .get(`/api/v1/auth/user-role`, {
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
}
//end put method

//
export const getMethod = new GetMethod();
export const postMethod = new PostMethod();
export const updateMethod = new UpdateMethod();
//
