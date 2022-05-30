package com.pdist.cadastroalunos.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pdist.cadastroalunos.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
